import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import uniqid from 'uniqid';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOkdER-FDd9-j7ZofdD1lXTOc_H7K_H2E",
  authDomain: "food-1a817.firebaseapp.com",
  projectId: "food-1a817",
  storageBucket: "food-1a817.appspot.com",
  messagingSenderId: "21157953078",
  appId: "1:21157953078:web:070feb6e1836847b28a297",
  measurementId: "G-7M4NKKQ37R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function POST(req) {
  const data =  await req.formData();
  if (data.get('file')) {
    // upload the file
    const file = data.get('file');
    const ext = file.name.split('.').slice(-1)[0];
    const newFileName = uniqid() + '.' + ext;

    const storageRef = ref(storage, newFileName);
    
    // Upload file to Firebase Storage
    await uploadBytes(storageRef, file);

    // Get the download URL
    const downloadURL = await getDownloadURL(ref(storage, newFileName));

    return Response.json(downloadURL);
  }
  return Response.json(true);
}
