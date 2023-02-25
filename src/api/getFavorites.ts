import { db } from '../firebase';

const getFavorites = () => {
  db.collection("favorites")
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => doc.data());
    });
};

export default getFavorites;
