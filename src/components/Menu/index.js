import React from "react";
import { validaRole } from '../../config/verificaRole'
import { Nav, Navbar } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CalendarIcon from '@rsuite/icons/Calendar';
import ExitIcon from '@rsuite/icons/Exit';
import Logout from '../../components/Lougout/Logout';
import './menu.css';

const Menu = () => {
    const role = validaRole();

    return (
        <>
            <Navbar>
                <Navbar.Brand href="#">DoaSangue</Navbar.Brand>
                <Nav>
                    {role === 'INSTITUICAO' && (
                        <>
                            <Nav.Item href="/home" icon={<HomeIcon />}>Inicio</Nav.Item>
                            <Nav.Item href="/minhas-postagens" icon={<HomeIcon />}>Minhas postagens</Nav.Item>
                        </>
                    )}
                    {role === 'USUARIO' && (
                        <>
                            <Nav.Item href="/home" icon={<HomeIcon />}>Inicio</Nav.Item>
                            <Nav.Item href="/agendamento" icon={<CalendarIcon />}>Agendamento</Nav.Item>
                        </>
                    )}
                </Nav>
                {(role === 'INSTITUICAO' || role === 'USUARIO') && (
                    <Nav pullRight>
                        <Nav.Item icon={<ExitIcon />} onClick={Logout}>Sair</Nav.Item>
                    </Nav>
                )}
            </Navbar>
        </>
    );
};

export default Menu;
