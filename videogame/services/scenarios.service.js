import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

const escenariosRef = db.collection('escenarios');

escenariosRef.get().then(querySnapshot => {
  const escenarios = querySnapshot.docs.map(doc => doc.data());
  console.log(escenarios);
});

// Para buscar por categorías, puedes agregar un filtro a la consulta
const categoria = 'categoria1';
escenariosRef.where('categoria', '==', categoria).get().then(querySnapshot => {
  const escenariosFiltrados = querySnapshot.docs.map(doc => doc.data());
  console.log(escenariosFiltrados);
});