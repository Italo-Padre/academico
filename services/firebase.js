import { initializeApp, getApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";

let app
try{
    app=getApp()
}catch (error){
const firebaseConfig = {
  apiKey: process.env.FIRABASE_API_KEY,
  authDomain: process.env.FIRABASE_AUTH_DOMAIN,
  databaseURL: process.env.FIRABASE_DATABASE_URl,
  projectId: process.env.FIRABASE_PROJECT_ID,
  storageBucket: process.env.FIRABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRABASE_MESSAGING_SENDER_ID,
  appId: process.env.FIRABASE_APP_ID
};

 app = initializeApp(firebaseConfig);
}

const db = getDatabase(app)

export{db}