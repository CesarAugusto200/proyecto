
import "../Styled/Services.css"
import Veterinario from "../Imagenes/Veterinario.jpg"
import banioantipulgas from "../Imagenes/banioantipulgas.jpg"
import banioestetico from "../Imagenes/banioestetico.jpg"
import baniopersonalizado from "../Imagenes/baniopersonalizado.jpeg"
import esterilizacion from "../Imagenes/esterilizacion.jpeg"
function Servicios(){
    return(
   
        
        <div class="card">

    <div class="card">
    <img className="IMGDOG1" src={Veterinario}></img>
    <div class="card-body">
    <h5 class="card-title">Vacunas</h5>
    <h5 class="card-title">500.00$</h5>
    <p class="card-text">Vacunacion para tus mascotas.</p>
    
  </div>
  </div>

  <div class="card">
    <img className="IMGDOG1" src={banioantipulgas}></img>
    <div class="card-body">
    <h5 class="card-title">Baño anti pulgas</h5>
    <h5 class="card-title">300.00$</h5>
    <p class="card-text">Baño para quitarle las pulgas a tus mascotas</p>
    
  </div>
  </div>


  <div class="card">
    <img className="IMGDOG1" src={banioestetico}></img>
    <div class="card-body">
    <h5 class="card-title">Baño estetico</h5>
    <h5 class="card-title">600.00$</h5>
    <p class="card-text">Nostros le daremos el estilo que usted quiera para su mascota</p>
    
  </div>
  </div>


  <div class="card">
    <img className="IMGDOG1" src={baniopersonalizado}></img>
    <div class="card-body">
    <h5 class="card-title">Baño personalizado</h5>
    <h5 class="card-title">400.00$</h5>
    <p class="card-text">Seleccion si solo quiere un baño , cortes , o baño anti pulgas </p>
    
  </div>
  </div>



  <div class="card">
    <img className="IMGDOG1" src={esterilizacion}></img>
    <div class="card-body">
    <h5 class="card-title">esterilizacion</h5>
    <h5 class="card-title">300.00$</h5>
    <p class="card-text">Esterilizacion para tus mascotas.</p>
    
  </div>
  </div>




        

        




      </div>



        
         
        
    )
}
export default Servicios;