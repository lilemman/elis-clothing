import {initializeApp } from 'firebase/app';
import {getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider}
     from 'firebase/auth'
import {
getFirestore,
doc,getDoc,setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD6OUmo2Kd_qktdyX70yC8PmuqNEE1RAKQ",
    authDomain: "elis-clothing-db.firebaseapp.com",
    projectId: "elis-clothing-db",
    storageBucket: "elis-clothing-db.appspot.com",
    messagingSenderId: "5222475917",
    appId: "1:5222475917:web:9f564e5b3c321daaed1ac4"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);
//firestore export
  export const db=getFirestore();

  export const creatUserDocumentFromAuth=async (userAuth)=>{
    const userDocRef=doc(db, 'users',userAuth.uid ) //db,collection,identifier
    console.log(userDocRef);

    const userSnapshot=await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName,email}=userAuth;
        const createdAt=new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            });
        }catch(error){
        console.log('error creating the user', error.message);
    }

    }
//if user data exists

//return userDocRef

  }
