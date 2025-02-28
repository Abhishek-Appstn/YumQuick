import { addDoc, collection, getFirestore } from "@react-native-firebase/firestore";

const FirestoreCreateDoc = async({collectionName,data}) => {
     const db=getFirestore()
          const dbref=collection(db,collectionName)
          try {
              const docref = await addDoc(dbref, {...data});
          return docref
          } catch (err) {
              console.log("error @ create doc",err);
              
          }
}

export default FirestoreCreateDoc