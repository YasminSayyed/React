import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from '@material-ui/core/Container';
import {NavLink} from "react-router-dom";

function Footer(){
    return(
        <>
        <footer>
            <Container maxWidth="lg">
            <div class="legal-text-wrap">
            <div class="footer-legal-text">© 2020. Powered by &nbsp;  
            <NavLink to="/">Eastern Enterprise</NavLink>
            </div>
            <div>
                <NavLink to="/">Licensing</NavLink>
                </div>
                </div>
            </Container>
        </footer>
        </>
    );
}

export default Footer;