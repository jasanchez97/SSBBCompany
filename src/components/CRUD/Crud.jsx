import React, { useState, useEffect } from 'react';
import { addRequest, getRequests, deleteRequest, updateRequest } from '../../services/requests.services';
import './Crud.css';

function Crud() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [data, setData] = useState([]);

  // Cargar datos en tiempo real
  useEffect(() => {
    getRequests(setData);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newData = {
      nombre: name,
      apellidos: surname,
      domicilio: address,
      correoElectronico: email,
      contacto: contact,
    };

    await addRequest(newData);

    // Limpiar el formulario
    setName('');
    setSurname('');
    setAddress('');
    setEmail('');
    setContact('');
  };

  const handleEdit = async (item) => {
    const updatedData = {
      nombre: prompt("Ingrese el nuevo nombre", item.nombre) || item.nombre,
      apellidos: prompt("Ingrese los nuevos apellidos", item.apellidos) || item.apellidos,
      domicilio: prompt("Ingrese el nuevo domicilio", item.domicilio) || item.domicilio,
      correoElectronico: prompt("Ingrese el nuevo correo electrónico", item.correoElectronico) || item.correoElectronico,
      contacto: prompt("Ingrese el nuevo contacto", item.contacto) || item.contacto,
    };

    await updateRequest(item.id, updatedData);
  };

  const handleDelete = async (id) => {
    await deleteRequest(id);
  };

  return (
    <main className="crud-main">
      <form id="crud-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Apellidos</label>
          <input type="text" id="surname" name="surname" value={surname} onChange={(event) => setSurname(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Domicilio</label>
          <input type="text" id="address" name="address" value={address} onChange={(event) => setAddress(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required value={email} onChange={(event) => setEmail(event.target.value)} pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Por favor ingrese un correo electrónico válido (ej. ejemplo@dominio.com)" />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contacto</label>
          <input type="text" id="contact" name="contact" required value={contact} onChange={(event) => {
            const value = event.target.value;
            if (/^\d{0,9}$/.test(value)) {
              setContact(value);
            }
          }}
            maxLength="9"
            placeholder="Ingrese 9 dígitos"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {data.length > 0 && (
        <table className="crud-table">
          <colgroup>
            <col style={{ width: "10%" }} /> {/* Nombre */}
            <col style={{ width: "10%" }} /> {/* Apellidos */}
            <col style={{ width: "10%" }} /> {/* Domicilio */}
            <col style={{ width: "10%" }} /> {/* Correo */}
            <col style={{ width: "10%" }} /> {/* Contacto */}
            <col style={{ width: "15%" }} /> {/* Acciones */}
          </colgroup>
          <thead>
            <tr className="crud-table-header">
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Domicilio</th>
              <th>Correo Electrónico</th>
              <th>Contacto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.apellidos}</td>
                <td>{item.domicilio}</td>
                <td>{item.correoElectronico}</td>
                <td>{item.contacto}</td>
                <td className="crud-action-button">
                  <button onClick={() => handleEdit(item)}>Editar</button>
                  <button onClick={() => handleDelete(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default Crud;