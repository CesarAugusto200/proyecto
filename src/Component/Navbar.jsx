import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/Servicios"
                    >
                        Servicios
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/Productos"
                    >
                        Productos
                    </NavLink> 

                    
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/Form"
                    >
                        Venta
                    </NavLink>


                    <NavLink 
                        className="nav-item nav-link" 
                        to="/PerritoVenta"
                    >
                        Adopta
                    </NavLink>


                    
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/ListaPerrito"
                    >
                        Lista de Perritos
                    </NavLink>
             
                </div>
            </div>

        </nav>
    )
}