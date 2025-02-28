import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from '@react-native-firebase/firestore';
const FetchFirestoreData = async ({ CollectionName, QueryFilters }) => {
    console.log('FetchFirestoreData called');
    console.log('CollectionName:', CollectionName);
    console.log('QueryFilters:', QueryFilters)
  const db = getFirestore();
  const CollectionRef = collection(db, CollectionName);
const q = QueryFilters && QueryFilters.length
  ? query(CollectionRef,...QueryFilters)
  : query(CollectionRef);

  let DataArray = [];
  const querySnapshot = await getDocs(q);
  !querySnapshot.empty
    ? querySnapshot.docs.forEach(item => {
        DataArray.push(item.data());
      })
    : console.log('Response Empty');
  return DataArray;
};

export default FetchFirestoreData;
// ,QueryFilters:[where("Type",'==','Snacks')]