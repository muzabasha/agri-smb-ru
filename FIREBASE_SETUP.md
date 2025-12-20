# Firebase Setup Instructions for Agri-LMS

You have successfully configured the code with your Firebase credentials. To make Authentication and the Admin Dashboard work, you **MUST** complete these steps in the Firebase Console.

## 1. Enable Authentication Providers
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Select your project **"agri-smb-lu"**.
3. In the left sidebar, click **Build** -> **Authentication**.
4. Click **Get Started** (if not already enabled).
5. Click **Sign-in method** tab.
6. Enable **Email/Password**:
   - Click "Email/Password".
   - Toggle "Enable" to ON.
   - Click "Save".
7. Enable **Google**:
   - Click "Google".
   - Toggle "Enable" to ON.
   - Set the "Project support email" to your email.
   - Click "Save".

## 2. Create the Firestore Database
1. In the left sidebar, click **Build** -> **Firestore Database**.
2. Click **Create Database**.
3. Choose a location (e.g., `asia-south1` or `us-central1`).
4. Select **Start in production mode**.
5. Click **Create**.

## 3. Set Security Rules (CRITICAL for Admin Dashboard)
For the Admin Dashboard (`admin-dashboard.html`) to see all students, you must set these rules.

1. Go to **Firestore Database** -> **Rules** tab.
2. Delete the existing code and paste this exactly:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // 1. User Data Security
    // Students can only read/write their own progress.
    // Admin (muza.basha@gmail.com) can read/write any user data.
    match /users/{userId} {
      allow read, write: if request.auth != null && 
                         (request.auth.uid == userId || request.auth.token.email == 'muza.basha@gmail.com');
    }
    
    // 2. Admin Dashboard Listing
    // Only Admin can list all users to populate the dashboard.
    match /users/{document=**} {
      allow read: if request.auth != null && request.auth.token.email == 'muza.basha@gmail.com';
    }
  }
}
```
3. Click **Publish**.

## 4. First Login (Admin Initialization)
1. Open your deployed website or localhost.
2. The site will redirect you to `login.html`.
3. **Log in with Google** using `muza.basha@gmail.com`.
4. The system will detect your email and redirect you to `admin-dashboard.html`.

## 5. Verify
- **Students**: When a student logs in, they go to `index.html` and their progress is saved to Firestore.
- **Admin**: When you log in, you see the Admin Dashboard with a list of all registered students.
