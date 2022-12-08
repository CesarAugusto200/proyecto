
import {Routes , Route, Navigate,  } from "react-router-dom"
import {Navbar} from "../Component/Navbar"
import Productos from "../Page/Productos";
import Servicios from "../Page/Servicios";
import Form from "../Page/Form"
import PerritoVenta from "../Page/PerritoVenta";
import ListaPerrito from "../Page/ListaPerrito";
import Video from "../Page/Video";
import ListaPerrito2 from "../Page/ListaPerrito2";


  

 function  AppRoute  ()  {
  return(
    <>
    <Navbar/>
    <Routes>
        <Route>
           <Route path="Video" element={<Video />} />
          <Route path="Servicios" element={<Servicios />} />
          <Route path="Productos" element={<Productos />} />
          <Route path="Form" element={<Form />} />
          <Route path="PerritoVenta" element={<PerritoVenta/>}/>
          <Route path="ListaPerrito" element={<ListaPerrito/>}/>
          <Route path="ListaPerrito2" element={<ListaPerrito2 />}/>
          <Route path="/" element={<Navigate to="/Video" />} />
        </Route>
      </Routes>
    </>
  ); 
}

 export default AppRoute;

