import { Text, SafeAreaView, Image, View, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import logo from "../Assets/Logo/Logo.png"
import { colorList } from "../Utils/ColorList";
import InputBox from "../components/InputBox";
import { useState } from "react";
//import firestore from '@react-native-firebase/firestore';
//import { signInWithEmailAndPassword } from "firebase/auth";
//import { doc, setDoc } from "firebase/firestore";
//import { auth, db } from "../firebaseconfig"; // adjust path
export default function Login(props) {

 const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [password, setPassword] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  

  const addUser = async () => {

    try{
        await firestore().collection('Users').add({
            name: 'John Doe',
            email: 'john@example.com',
            createdAt: firestore.FieldValue.serverTimestamp(),
          });
      
    }catch(err){
console.log("Create err",err)
    }
   
    Alert.alert("User created successfully")
  };

  const onSubmit = () => {
    // You can add validation here if needed
    if (!email) {
      setEmailErr("Email is required");
      return;
    }
  
    if (!password) {
      setPasswordErr("Password is required");
      return;
    }
  
    // Clear any previous errors
    setEmailErr("");
    setPasswordErr("");
  
    // Navigate to the next screen
    props.navigation.navigate("Home"); // Replace "Home" with your actual screen name
  };
  



  

const loginHandler = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Optional: Store login time or other metadata
    await setDoc(doc(db, "loginLogs", user.uid), {
      email: user.email,
      lastLogin: new Date(),
    }, { merge: true }); // `merge: true` updates existing records

    alert("Login successful!");
    props.navigation.replace("HomeScreen"); // or wherever
  } catch (error) {
    alert(error.message);
  }
};



  
  
    return (
        <SafeAreaView style={styles.bgWrapper}>
            <View style={styles.appLogoView} onSubmit={loginHandler}>
                <Image source={logo} style={styles.appLogoImage} resizeMode="contain"></Image>
                <Text style={styles.textStyle}>NIRBHAVAA</Text>
                
            </View>
            <View style={styles.textView}>
                <InputBox  text={email} isError={false} errMsg={emailErr} type="email" onChangeText={(txt) => setEmail(txt)}  />
                <InputBox  text={password} isError={false} errMsg={passwordErr} type="password" onChangeText={(txt) => setPassword(txt)} />
            </View>

            <View style={{ alignItems: "center", flex:4 }}>
                <TouchableOpacity style={styles.subBtn} activeOpacity={0.7} onPress={()=>addUser()}>
                    <Text style={styles.subTxt}>LOGIN</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                    <Text style={{ color: "white", marginTop: 10, fontWeight:"bold", fontSize:13 }}>Forgot Password? </Text>
                    <Text style={{ color: "#37c59c", marginTop: 10, fontWeight:"bold", fontSize:13 }}> Click Here</Text>
                </View>
            </View>

            <View style={{ justifyContent: "flex-end", marginBottom:15 }}>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ color: "white",fontWeight:"bold", fontSize:13 }}>Don't have an account yet?</Text>
                    <Text style={{  color: "#37c59c", fontWeight:"bold", fontSize:13, marginLeft:6}} onPress={() => props.navigation.push("SignUp")}>SIGN UP</Text>
                </View>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgWrapper: {
        flex: 1,
        backgroundColor: colorList.appBgColor
    },
    appLogoView: {
        alignItems: "center",
        marginTop: 30,
    },
    appLogoImage:{
        height:60
    },
    textStyle:{
        color:"white",
        fontWeight:"bold",
        marginTop:10,
        fontSize:21,
    },
    textView: {
        padding: 50,
        marginTop: 50,
        flex:1
    },
    subBtn: {
        backgroundColor: "#e0afcc", borderRadius: 19, padding: 10, marginTop: 50,width:"70%"
    },
    subTxt: {
        color: "#ffffff", textAlign: "center", fontSize: 18, fontWeight: "bold"
    },
}) 