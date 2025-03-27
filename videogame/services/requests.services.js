import db from "../src/firebase.js";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/requests");

const addRequest = (request) => {
  const timestamp = Date.now();
  return push(dbRef, { ...request, timestamp });
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const fecha = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  console.log(fecha);
  return fecha;
};

const getAllRequests = async () => {
  const snapshot = await get(dbRef.orderByChild("timestamp"));
  const requests = snapshot.val();
  const requestsArray = Object.keys(requests).map((key) => {
    const request = requests[key];
    const timestamp = request.timestamp;
    request.fecha = formatDate(timestamp);
    return request;
  });
  requests(requestsArray.reverse());
};

const removeRequest = (key) => {
  const dbRefRequest = ref(db, `/requests/${key}`);
  return remove(dbRefRequest);
};

export default {
  getAllRequests,
  addRequest,
  removeRequest,
};