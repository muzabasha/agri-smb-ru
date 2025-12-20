// TODO: REPLACE WITH YOUR FIREBASE CONFIGURATION
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (or use existing)
// 3. Add a Web App
// 4. Copy the "firebaseConfig" object and paste it below
// 5. Enable "Authentication" in the console (Google and Email/Password providers)
// 6. Enable "Firestore Database" in the console

export const firebaseConfig = {
    apiKey: "AIzaSyDnbn-Y2ClhZVa6KAWEXfCPe-FhTOHz6tc",
    authDomain: "agri-smb-lu.firebaseapp.com",
    projectId: "agri-smb-lu",
    storageBucket: "agri-smb-lu.firebasestorage.app",
    messagingSenderId: "786272626896",
    appId: "1:786272626896:web:52da80af924b65dc0756d5",
    measurementId: "G-30MWZ9MVWS"
};

// Check if config is still default
if (firebaseConfig.apiKey === "YOUR_API_KEY_HERE") {
    console.warn("⚠️ Firebase Config is missing! Please update js/firebase-config.js with your credentials.");
    alert("⚠️ Firebase Configuration Missing! \n\nPlease update 'js/firebase-config.js' with your Firebase project credentials to make Login and Dashboard work.");
}
