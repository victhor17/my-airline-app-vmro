import { database } from './Instance';
import { ref, child, get } from 'firebase/database';


const dbRef = ref(database);

/**
 * 
 * @returns {Promise} containig the firebase response
 */
export const response = async () => await get(child(dbRef, `/data`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log('de nuevo datra')
    return snapshot.val();
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
