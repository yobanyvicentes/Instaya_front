import React from 'react';

export const FormOrder = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <form className='form' onSubmit={'hacer algo al enviar'}>
                        <div className='row'>
                            <h2>SOLICITAR RECOGIDA DE PAQUETES</h2>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="diarecogidaid">Día de recogida</label>
                                    <input type="text" name="dia" value="" id="diarecogidaid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="horarecogidaid">Hora de recogida</label>
                                    <input type="text" name="hora" value="" id="horarecogidaid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="medidasid">Medidas "ancho,alto,largo" (cm)</label>
                                    <input type="text" name="medidas" value="" id="medidasid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-1'>
                                    <label className='form-label' for="delicadoid">¿Delicado?</label>
                                    <input type="text" name="delicado" value="" id="delicadoid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="pesoid">Peso en KG</label>
                                    <input type="text" name="peso" value="" id="pesoid" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="direccionrecogidaid">Dirección de recogida</label>
                                    <input type="text" name="direccionrecogida" value="" id="direccionrecogidaid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="ciudadrecogidaid">Ciudad de recogida</label>
                                    <input type="text" name="ciudadrecogida" value="" id="ciudadrecogidaid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="nombreemisorid">Nombre de quien envía</label>
                                    <input type="text" name="nombreemisor" value="" id="nombreemisorid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="emisortipoidid">Tipo Documento</label>
                                    <input type="text" name="emisortipoid" value="" id="emisortipoidid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="emisoridid">Número de Identificación</label>
                                    <input type="text" name="emisorid" value="" id="emisoridid" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="direccionentregaid">Dirección de entrega</label>
                                    <input type="text" name="direccionentrega" value="" id="direccionentregaid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="ciudadentregaid">Ciudad de entrega</label>
                                    <input type="text" name="ciudadentrega" value="" id="ciudadentregaid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-3'>
                                    <label className='form-label' for="nombrereceptorid">Nombre de quien recibe</label>
                                    <input type="text" name="nombrereceptor" value="" id="nombrereceptorid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="receptortipoidid">Tipo Documento</label>
                                    <input type="text" name="peso" value="" id="receptortipoidid" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='mb-2'>
                                    <label className='form-label' for="receptoridid">Número de Identificación</label>
                                    <input type="text" name="receptorid" value="" id="receptoridid" />
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

