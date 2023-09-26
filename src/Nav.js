import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import rajith from './rajith1.jpg'

function Nav() {

    return (

        <nav className="navbar navbar-dark bg-dark sticky-top" style={{display:"grid"}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={{marginRight:"20px"}}>
                <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">PROFILE</a>
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header bg-dark" >
                    <div style={{display: 'flex', alignItems: "center"}}>
                        <img className="navImage" src={rajith} alt="Rajith"/>
                        <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel" style={{marginLeft:"15px"}}>RAJITH</h5>
                    </div>
                    
                    <button type="button" className="btn-close menuCloseButton" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body bg-dark">
                    <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                    <li className="nav-item ">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#label">Professional Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#label">References</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Curriculum Projects
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                        <li><a className="dropdown-item" href="#">Masters</a></li>
                        <li><a className="dropdown-item" href="#">Bachelors</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </nav>
    );
}

export default Nav;
