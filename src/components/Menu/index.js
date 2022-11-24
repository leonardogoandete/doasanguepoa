import React from "react";
import { validaRole } from '../../config/verificaRole'
import { Nav, Navbar } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CalendarIcon from '@rsuite/icons/Calendar';
import ExitIcon from '@rsuite/icons/Exit';
import Logout from '../../components/Lougout/Logout';
import './menu.css'

const Menu = () => {
    const role = validaRole()

    if(role === 'instituicao'){
        return (

            <>
            <Navbar>
            <Navbar.Brand href="#">DoaSangue</Navbar.Brand>
            <Nav >
                <Nav.Item icon={<HomeIcon />}>Inicio</Nav.Item>
                <Nav.Item >News</Nav.Item>
                <Nav.Item >Products</Nav.Item>
            </Nav>
            <Nav pullRight>
                <Nav.Item icon={<ExitIcon />} onClick={Logout}>Logout</Nav.Item>
            </Nav>
            </Navbar>
            </>
        );
    }else if(role === 'usuario'){
        return (
            <>
            <Navbar>
            <Navbar.Brand href="#">DoaSangue</Navbar.Brand>
            <Nav >
                <Nav.Item href="/home" icon={<HomeIcon />}>Inicio</Nav.Item>
                <Nav.Item href="/agendamento" icon={<CalendarIcon/>}>Agendamento</Nav.Item>
                <Nav.Item >News</Nav.Item>
                <Nav.Item >Products</Nav.Item>
            </Nav>
            <Nav pullRight>
                <Nav.Item icon={<ExitIcon />} onClick={Logout}>Logout</Nav.Item>
            </Nav>
            </Navbar>
            </>
        );
    }
};

export default Menu;