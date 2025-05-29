// supabase.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://juytdhatftpxpiejjgum.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1eXRkaGF0ZnRweHBpZWpqZ3VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxMTM3OTMsImV4cCI6MjA2MzY4OTc5M30.yx84JVYABpMrbbaa1SECJ32b_ZhKjg72OsyAEfXQMM0'; // Replace with your Supabase Anon Key

export default  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
