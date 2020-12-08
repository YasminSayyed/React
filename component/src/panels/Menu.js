import React from "react";
import {NavLink} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Container from '@material-ui/core/Container';

function Menu(){
    return (
        <>
        <header>
            <Container maxWidth="lg">
                <nav className="navbar navbar-expand-lg">
                    <NavLink className="navbar-brand mr-auto" to="/" style={{fontSize:'32px',fontWeight:'600',color:'#e8242e'}}>Series</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ display: "flex",flexDirection:"column", justifyContent: "space-between",alignItems: "center",height: "17px",width: "21px",}}>
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                        </span>
                      </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav justify-content-end ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/series">Series</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">contact</NavLink>
                        </li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
         </>
    );
}


export default Menu;