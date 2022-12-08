import { Formik } from "formik";
import "../Styled/Formulario.css"
import React from "react";

function PerritoVenta(){
    return(
        <Formik>
            <form className="formulario">
               <label htmlFor="nombre del comprador" >Futuro Dueño</label>
               <input type="text" id="nombre" name="nombre" placeholder="Nombre"/> 
                <div>
                    <label htmlFor="Raza del perro">Raza del perrito</label>
                    <input type="text" id="Raza" name="Raza" placeholder="Raza del perrito"/>
                </div>

                <div>
                    <label htmlFor="Raza del perro">Numero de celular</label>
                    <input type="text" id="numero" name="Raza" placeholder="Numero"/>
                </div>
                <button type="submit">Comprar</button>
            </form>
            

        </Formik>
    )
}
export default PerritoVenta;