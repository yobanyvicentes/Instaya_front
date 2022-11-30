import React, { useState } from 'react';
import { postOrders } from '../../services/orderService';

export const FormOrder = () => {

    const [valoresform, setValoresform] = useState({});
    const {
        diaRe = '', horaRe = '', medidas = '', delicado = '', peso = '', dirRe = '', ciudadRe = '',
         nombreEmisor = '', tipoIdEmisor = '', idEmisor = '', dirEn = '', ciudadEn = '', nombreReceptor = '',
         tipoIdReceptor = '',  idReceptor = '' } = valoresform;

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresform({ ...valoresform, [name]: value });
        console.log(valoresform);
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const orderModel = {

            diaRe, horaRe, medidas, delicado, peso,
            dirRe, ciudadRe, nombreEmisor, tipoIdEmisor, idEmisor, dirEn,
            ciudadEn, nombreReceptor, tipoIdReceptor, idReceptor
        }
        try {
            const { data } = await postOrders(orderModel);
            console.log(data);
        } catch (error) {
            console.log("error al crear la solicitud");
        }
    }


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <form className='form'
                        onSubmit={(e) =>
                            handleOnSubmit(e)
                        }>
                        <div className='row'>
                            <h2>SOLICITAR RECOGIDA DE PAQUETES</h2>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="diarecogidaid">Día de recogida</label>
                                    <input
                                        required
                                        value={diaRe}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="diaRe" id="diarecogidaid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="horarecogidaid">Hora de recogida</label>
                                    <input required
                                        value={horaRe}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="horaRe" id="horarecogidaid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="medidasid">Medidas "ancho,alto,largo" (cm)</label>
                                    <input required
                                        value={medidas}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="medidas" id="medidasid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-1'>
                                    <label className='form-label' for="delicadoid">¿Delicado?</label>
                                    <input required
                                        value={delicado}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="delicado" id="delicadoid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="pesoid">Peso en KG</label>
                                    <input required
                                        value={peso}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="peso" id="pesoid" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="direccionrecogidaid">Dirección de recogida</label>
                                    <input required
                                        value={dirRe}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="dirRe" id="direccionrecogidaid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="ciudadrecogidaid">Ciudad de recogida</label>
                                    <input required
                                        value={ciudadRe}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="ciudadRe" id="ciudadrecogidaid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="nombreemisorid">Nombre de quien envía</label>
                                    <input required
                                        value={nombreEmisor}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="nombreEmisor" id="nombreemisorid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="emisortipoidid">Tipo Documento</label>
                                    <input required
                                        value={tipoIdEmisor}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="tipoIdEmisor" id="emisortipoidid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="emisoridid">Número de Identificación</label>
                                    <input required
                                        value={idEmisor}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="idEmisor" id="emisoridid" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="direccionentregaid">Dirección de entrega</label>
                                    <input required
                                        value={dirEn}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="dirEn" id="direccionentregaid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="ciudadentregaid">Ciudad de entrega</label>
                                    <input required
                                        value={ciudadEn}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="ciudadEn" id="ciudadentregaid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="nombrereceptorid">Nombre de quien recibe</label>
                                    <input required
                                        value={nombreReceptor}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="nombreReceptor" id="nombrereceptorid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="receptortipoidid">Tipo Documento</label>
                                    <input required
                                        value={tipoIdReceptor}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="tipoIdReceptor" id="receptortipoidid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="receptoridid">Número de Identificación</label>
                                    <input required
                                        value={idReceptor}
                                        onChange={(e) => {
                                            handleOnChange(e);
                                        }} type="text" name="idReceptor" id="receptoridid" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='mb-12'>
                                    <button type="onSubmit" className='btn btn-primary'>Solicitar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

