import {initializeApp} from "firebase/app";
            import {getAnalytics} from "firebase/analytics";
            
            const firebaseConfig = {
                apiKey: "AIzaSyB-RaFs1op3pG1Hllx8cBp8lEqOrm0d8tA",
            authDomain: "project-blinkit.firebaseapp.com",
            projectId: "project-blinkit",
            storageBucket: "project-blinkit.firebasestorage.app",
            messagingSenderId: "420734970383",
            appId: "1:420734970383:web:d586adb423b6bdc071917a",
            measurementId: "G-KF8SYDTQH9"
};

            
           export const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
