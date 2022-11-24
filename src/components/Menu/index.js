import React from "react";
import { validaRole } from '../../config/verificaRole'
import { Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CalendarIcon from '@rsuite/icons/Calendar';
import Logout from '../../components/Lougout/Logout';
import './menu.css'

const Menu = () => {
    const role = validaRole()

    if(role === 'instituicao'){
        return (
            <Nav justified appearance="subtle" reversed> 
            <Nav.Item icon={<HomeIcon />}>Inicio</Nav.Item>
            <Nav.Item>News</Nav.Item>
            <Nav.Item>Solutions</Nav.Item>
            <Nav.Item>Products</Nav.Item>
            <Nav.Item onClick={Logout}>Logout</Nav.Item>
        </Nav>
        );
    }else if(role === 'usuario'){
        return (
            <Nav justified>
            <Nav.Item href="/home" icon={<HomeIcon />}>Home</Nav.Item>
            <Nav.Item icon={<CalendarIcon/>} href="/agendamento">Agendamento</Nav.Item>
            <Nav.Item>Solutions</Nav.Item>
            <Nav.Item>Products</Nav.Item>
            <Nav.Item onClick={Logout}>Logout</Nav.Item>
        </Nav>
        );
    }
};

export default Menu;