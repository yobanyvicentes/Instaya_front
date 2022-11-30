import React, { useState} from 'react';
import { getOrdersById } from '../../services/orderService';

export const GridTable = () => {

  const [order , setOrder] = useState({});
  const [id, setId] = useState({});
  const { orderId = '' } = id;

  const mostrarOrder = async (e) => {
    e.preventDefault();
    const { data } = await getOrdersById(orderId);
    setOrder(data);
  }

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setId({ ...id, [name]: value });
  }

  return (
    <div className='container' >
      <div className="p">
        <div className="row justify-content-md-center">
          <form className='form p'
          onSubmit={(e) =>{
            mostrarOrder(e)
           }}>
            <div className="col col-lg-2">
              <label className='form-label' for="orderId">ID de seguimiento:</label>
            </div>
            <div className="col-md-auto">
              <input
                required
                value={orderId}
                onChange={(e) => {
                  handleOnChange(e);
                }}
                type="text"
                name="orderId"
                className='form-control'
                id="orderId" />
            </div>
            <div className="col col-lg-2 p">
              <button type="onSubmit" className='btn btn-primary ' >Buscar</button>
            </div>
          </form>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID seguimiento</th>
            <th scope="col">Envía</th>
            <th scope="col">Ciudad Origen</th>
            <th scope="col">Recibe</th>
            <th scope="col">Ciudad Destino</th>
            <th scope="col">Estado</th>
            <th scope="col">Día de entrega</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{order._id}</td>
            <td>{order.nombreEmisor}</td>
            <td>{order.ciudadRe}</td>
            <td>{order.nombreReceptor}</td>
            <td>{order.ciudadEn}</td>
            <td>Guardado</td>
            <td>{order.fechaCreacion}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

