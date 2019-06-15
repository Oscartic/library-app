import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
            <nav className="navbar navbar-light">
                <span className="navbar-brand mb-0 h1">
                    Administracion de Biblioteca
                </span>
            </nav>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={'/subscribers'} className="nav-link">
                            Suscriptores
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">
                            Libros
                        </Link>
                    </li>
        
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;