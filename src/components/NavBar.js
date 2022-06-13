import React from 'react';

function NavBar({ currentPage, handlePageChange }) {

return (
    <ul className="nav nav-bar">
        <li className="nav-item">
            <a href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >Home</a>
        </li>
        <li className="nav-item">
            <a href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >Resume</a>
        </li>
        <li className="nav-item">
            <a href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >Projects</a>
        </li>
        <li className="nav-item">
            <a href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >Home</a>
        </li>
    </ul>
);
}

export default NavBar;