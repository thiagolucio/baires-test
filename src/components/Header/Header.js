import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-secondary bg-dark fixed-top mb-5">
            <div className="container">
                <a className="navbar-brand" href="https://www.bairesdev.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://static.getcompanyinfo.com/static/logo/bairesdev_com_logo.png" width="30" height="30" className="d-inline-block align-top mr-1" alt="logoBaires" />                    
                </a>
                <div className="form-inline">
                    <button className="btn btn-outline-info my-2 my-sm-0 mr-5" onClick={()=> window.open("https://www.thiagolucio.com.br", "_blank")}>Contact Me!</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;


