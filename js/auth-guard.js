import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { firebaseConfig } from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check Auth State
// Check Auth State
console.log("Auth Guard: Initializing...");

// Fallback safety: If Firebase takes too long (>4s), force redirect to login
const authTimeout = setTimeout(() => {
    const loader = document.getElementById('app-loader');
    if (loader && loader.style.display !== 'none') {
        console.warn("Auth Guard: Timeout waiting for Firebase. Redirecting to login...");
        const path = window.location.pathname;
        if (!path.includes('login') && !window.location.href.includes('login.html')) {
            window.location.href = 'login.html';
        }
    }
}, 4000);

onAuthStateChanged(auth, (user) => {
    clearTimeout(authTimeout); // Auth check completed
    console.log("Auth Guard: State changed. User:", user ? user.email : "null");

    if (!user) {
        // Not logged in
        console.log("User not logged in. Redirecting to login...");

        // Store current URL to redirect back after login (optional, implemented simply here)
        sessionStorage.setItem('redirect_after_login', window.location.href);

        // If we are not already on the login page, redirect
        // If we are not already on the login page, redirect
        const path = window.location.pathname;
        if (!path.includes('login') && !window.location.href.includes('login.html')) {
            window.location.href = 'login.html';
        }

        // If we ARE on the login "route" (e.g. /login handled by index.html in SPA mode),
        // we must manually ensure the loader is hidden and login form is shown?
        // No, if /login serves index.html, we are in trouble because index.html is NOT the login page.
        // We need to assume Vercel serves login.html for /login.
    } else {
        // User is logged in
        console.log("User logged in:", user.email);

        // Reveal content
        // Reveal content
        const loader = document.getElementById('app-loader');
        const content = document.getElementById('app-content');
        if (loader) loader.style.display = 'none';
        if (content) content.style.display = 'block';

        // If we are on login page, redirect to index
        const path = window.location.pathname;
        if (path.includes('login') || window.location.href.includes('login.html')) {
            window.location.href = 'index.html';
        }

        // Expose user globally for other scripts
        window.currentUser = user;
    }
});

export { auth };
