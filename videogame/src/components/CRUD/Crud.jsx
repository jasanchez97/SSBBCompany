import React, { useState } from 'react';
import requests from '/services/requests.services.js';
import './Crud.css';

const { addRequest } = requests;

function Crud() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [reason, setReason] = useState('');
  const [showtable, setShowTable] = useState(true);
  const [data, setData] = useState([]);

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = {
      nombre: name,
      apellidos: surname,
      domicilio: address,
      correoElectronico: email,
      contacto: contact,
      motivo: reason
    };
    addRequest(newData)
      .then((key) => {
        console.log(`Solicitud agregada con ID ${key}`);
        setShowTable(true);
        setData([...data, newData]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = (item) => {
    const index = data.findIndex((i) => i.nombre === item.nombre);
    if (index !== -1) {
      const editedItem = {
        ...item,
        nombre: prompt("Ingrese el nuevo nombre", item.nombre),
        apellidos: prompt("Ingrese los nuevos apellidos", item.apellidos),
        domicilio: prompt("Ingrese el nuevo domicilio", item.domicilio),
        correoElectronico: prompt("Ingrese el nuevo correo electrónico", item.correoElectronico),
        contacto: prompt("Ingrese el nuevo contacto", item.contacto),
        motivo: prompt("Ingrese el nuevo motivo", item.motivo),
      };
      // Actualizar la base de datos con los nuevos datos
      addRequest(editedItem)
        .then((key) => {
          console.log(`Solicitud actualizada con ID ${key}`);
          // Actualizar el estado del componente con los nuevos datos
          const newData = [...data];
          newData[index] = editedItem;
          setData(newData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  
  const handleDelete = (item) => {
    const index = data.findIndex((i) => i.nombre === item.nombre);
    if (index !== -1) {
      // Eliminar el item de la base de datos
      deleteRequest(item)
        .then(() => {
          console.log(`Solicitud eliminada`);
          // Actualizar el estado del componente sin el item eliminado
          const newData = [...data];
          newData.splice(index, 1);
          setData(newData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <main className="crud-main">
        <form id="crud-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required autoComplete="on" value={name} onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Apellidos</label>
            <input type="text" id="surname" name="surname" autoComplete="on" value={surname} onChange={(event) => setSurname(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Domicilio</label>
            <input type="text" id="address" name="address" autoComplete="on" value={address} onChange={(event) => setAddress(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required autoComplete="on" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contacto</label>
            <input type="text" id="contact" name="contact" required autoComplete="on" value={contact} onChange={(event) => setContact(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="reason">Motivo por el que se suscribe</label>
            <textarea id="reason" name="reason" required autoComplete="on" rows="5" cols="30" value={reason} onChange={(event) => setReason(event.target.value)}></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
        {showtable && (
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Domicilio</th>
                <th>Correo electrónico</th>
                <th>Contacto</th>
                <th>Motivo</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.nombre}</td>
                  <td>{item.apellidos}</td>
                  <td>{item.domicilio}</td>
                  <td>{item.correoElectronico}</td>
                  <td>{item.contacto}</td>
                  <td>{item.motivo}</td>
                  <td>
                    <button onClick={() => handleEdit(item)}>Editar</button>
                    <button onClick={() => handleDelete(item)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}

export default Crud;