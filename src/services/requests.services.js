import { ref, set, push, onValue, remove, update } from "firebase/database";
import { database } from "../firebase";

// Agregar una solicitud a Firebase
const addRequest = async (newData) => {
  const newRequestRef = push(ref(database, "requests"));
  await set(newRequestRef, newData);
  return newRequestRef.key;
};

// Obtener todas las solicitudes en tiempo real
const getRequests = (callback) => {
  const requestsRef = ref(database, "requests");
  onValue(requestsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const requestsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      callback(requestsArray);
    } else {
      callback([]);
    }
  });
};

// Eliminar una solicitud por ID
const deleteRequest = async (id) => {
  await remove(ref(database, `requests/${id}`));
};

// Actualizar una solicitud por ID
const updateRequest = async (id, updatedData) => {
  await update(ref(database, `requests/${id}`), updatedData);
};

// Exportar todas las funciones
export { addRequest, getRequests, deleteRequest, updateRequest };
