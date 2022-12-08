import Veterinario from "../Imagenes/Veterinario.jpg"
import cepillo1 from "../Imagenes/cepillo1.jpg"
import cepillo2 from "../Imagenes/cepillo2.jpg"
import Guante from "../Imagenes/Guante.jpg"
import PedigreeA from "../Imagenes/PedigreeA.jpg"
import PedigreeC from "../Imagenes/PedigreeC.jpg"
import PelotaL from "../Imagenes/PelotaL.jpg"

function Productos(){
    return(
        <div class="card">

        
        
  <div class="card">
    <img className="IMGDOG1" src={cepillo1}></img>
    <div class="card-body">
    <h5 class="card-title">Cepillo</h5>
    <p class="card-text"> Cepillo de madera para mascota mediana</p>
    <p class="card-text"> 100.00$</p>
    
  </div>
  </div>



  
  <div class="card">
    <img className="IMGDOG1" src={cepillo2}></img>
    <div class="card-body">
    <h5 class="card-title">Cepillo de boton</h5>
    <p class="card-text">Cepillo plastico con boton para liberado de pelo </p>
    <h5 class="card-title">200.00$</h5>
    
  </div>
  </div>




  
  <div class="card">
    <img className="IMGDOG1" src={Guante}></img>
    <div class="card-body">
    <h5 class="card-title">Guante para cepillar</h5>
    <h5 class="card-title">400.00</h5>
    <p class="card-text">Guante con cerdas plasticas para cepillado de mascota</p>
    
  </div>
  </div>




  
  <div class="card">
    <img className="IMGDOG1" src={PelotaL}></img>
    <div class="card-body">
    <h5 class="card-title">Juguete limpiador</h5>
    <h5 class="card-title">120.00$</h5>
    <p class="card-text">Pelota con orificios para limpiar los dientes de la mascota</p>
    
  </div>
  </div>





  <div class="card">
    <img className="IMGDOG1" src={PedigreeC}></img>
    <div class="card-body">
    <h5 class="card-title">Alimento para cachorro</h5>
    <h5 class="card-title">200.00$</h5>
    <p class="card-text">Alimento de 4 kg para cachorro</p>
    
  </div>
  </div>

        


  <div class="card">
    <img className="IMGDOG1" src={PedigreeA}></img>
    <div class="card-body">
    <h5 class="card-title">Alimento para perro adulto</h5>
    <h5 class="card-title">400.00$</h5>
    <p class="card-text">Alimento pra perro adulto de 7kg</p>
    
  </div>
  </div>

      </div>
    
    )
}
export default Productos;