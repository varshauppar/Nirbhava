import React, {useEffect, useRef, useState} from 'react';
import {View, Button, PermissionsAndroid, Platform, Alert} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import firestore from '@react-native-firebase/firestore';
import RNFS from 'react-native-fs';
import SendSMS from 'react-native-sms';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from "../Firebase";
const CLOUDINARY_UPLOAD_PRESET = 'unsigned_audio';
const CLOUDINARY_CLOUD_NAME = 'drsaljavc';
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/video/upload`;

const AudioRecorder = () => {
  const recorderPlayer = useRef(new AudioRecorderPlayer()).current;
  const [isRecording, setIsRecording] = useState(false);

  const uid = auth.currentUser.uid;

  // useEffect(()=>{
  //   const uid = auth.currentUser.uid;
  //   getUserData(uid)
  // },[])
  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
       PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
  
      ]);
      return Object.values(granted).every(value => value === PermissionsAndroid.RESULTS.GRANTED);
    }
    return true;
  };
  const stopRecording =async()=>{
    await recorderPlayer.stopRecorder()
    setIsRecording(false)
    }  
  
  const startRecording = async () => {
    const granted = await requestPermissions();
    if (!granted) {
      Alert.alert('Permissions denied');
      return;
    }
    setIsRecording(true)
    const path = `${RNFS.ExternalDirectoryPath}/emergency_${Date.now()}.mp4`;


    await recorderPlayer.startRecorder(path);
    console.log('Recording started...');

    setTimeout(async () => {
      const result = await recorderPlayer.stopRecorder();
      console.log('Recording stopped:', result);
      await uploadToCloudinary(result);
    }, 5 *  1000); // 5 minutes
    // 5 * 60 * 1000 5 minute
  };

  const uploadToCloudinary = async filePath => {
    const data = new FormData();

    data.append('file', {
      uri: Platform.OS === 'android' ? `file://${filePath}` : filePath,
      type: 'video/mp4',
      name: `audio_${Date.now()}.mp4`,
    });
    data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: data,
      });

      const json = await res.json();
      if (json.secure_url) {
        console.log('✅ Upload Success:', json.secure_url);
        sendToContacts(json.secure_url);
        setIsRecording(false)
      } else {
        console.error('❌ Cloudinary Error:', json);
        setIsRecording(false)
        Alert.alert('Upload failed', JSON.stringify(json));
      }
    } catch (err) {
      setIsRecording(false)
      console.error('❌ Upload Exception:', err);
      Alert.alert('Upload failed', err.message);
    }
  };

  const getUserData = async (uid) => {
    const userRef = doc(db, "Users", uid);
    const userSnap = await getDoc(userRef);
  
    if (userSnap.exists()) {
      const userData = userSnap.data();
      console.log("User Data:", userData);
      return userData.emergencyContacts;
    } else {
      console.log("No such user document!");
      return [];
    }
  };
  const sendToContacts = async (messageUrl) => {

    const snapshot = await getUserData(uid);
  
    if (!snapshot) {
      Alert.alert('User not found');
      setIsRecording(false)
      return;
    }
    const msg = `Emergency Audio Recording: ${messageUrl}`;
    const recipients = snapshot.map(contact => contact.phone);
    SendSMS.send(
      {
        body: msg,
        recipients, // array of phones
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: true,
      },
      (completed, cancelled, error) => {
        if (completed) console.log(`✅ Message sent to all contacts`);
        else if (cancelled) console.log(`⚠️ Message sending cancelled`);
        else if (error) console.error(`❌ Error:`, error);
      }
    );
    // snapshot.forEach(contact => {
    //   const msg = `Emergency Audio Recording: ${messageUrl}`;
    //   console.log("contact",contact);
    //   SendSMS.send(
    //     {
    //       body: msg,
    //       recipients: [contact.phone],
    //       successTypes: ['sent', 'queued'],
    //       allowAndroidSendWithoutReadPermission: true,
    //     },
    //     (completed, cancelled, error) => {
    //       if (completed) console.log(` Sent to ${contact.name}`);
    //       else if (cancelled) console.log(`⚠️ Cancelled for ${contact.name}`);
    //       else if (error) console.error(` Error:`, error);
    //     },
    //   );
    // });
  };

  const test =()=>{
    const url ="https://res.cloudinary.com/drsaljavc/video/upload/v1748369407/w6mkb6fgcrmgixemzyou.mp4"
    sendToContacts(url)

  }

  return (
    <View style={{padding: 20,alignItems:"center",justifyContent:"center",flex:1}}>
      <Button title= {isRecording?"Recording ...": "Record & Send Audio (5 mins)"} onPress={isRecording?stopRecording: startRecording} />
    </View>
  );
};

export default AudioRecorder;
