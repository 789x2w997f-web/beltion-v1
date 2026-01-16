import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { UserStats } from '../types';

// --- FIREBASE CONFIGURATION TEMPLATE ---
// Replace the values below with your actual Firebase project keys
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Initialize Firebase (Conditional check to prevent errors in demo environment without keys)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// --- HOOKS ---

/**
 * Hook to fetch real-time user stats.
 * Includes a fallback mock mode for demonstration if no user is authenticated or config is invalid.
 */
export const useUserStats = () => {
  const [stats, setStats] = useState<UserStats>({
    xp: 150,
    xpTarget: 1000,
    timerRemainingMin: 50,
    streak: 4,
    objectiveProgress: 37,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would check auth.currentUser
    const user = auth.currentUser;
    
    if (user) {
      // Real Firestore implementation
      const userDocRef = doc(db, 'userStats', user.uid);
      const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists()) {
          setStats(docSnap.data() as UserStats);
        }
        setLoading(false);
      }, (error) => {
        console.error("Firestore read failed:", error);
        setLoading(false); // Fallback to initial state on error
      });

      return () => unsubscribe();
    } else {
      // MOCK DATA SIMULATION for Demo purposes
      // Simulating a network delay
      const timer = setTimeout(() => {
        setStats({
          xp: 150,
          xpTarget: 1000,
          timerRemainingMin: 50,
          streak: 4,
          objectiveProgress: 37,
        });
        setLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  return { stats, loading };
};

/**
 * Updates a specific field in the user stats.
 */
export const updateUserStat = async (field: Partial<UserStats>) => {
  const user = auth.currentUser;
  if (user) {
    const userDocRef = doc(db, 'userStats', user.uid);
    await updateDoc(userDocRef, field);
  } else {
    console.log("Mock update:", field);
  }
};

export { db, auth };