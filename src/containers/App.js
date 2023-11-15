import React from 'react'

import Routes from '../components/Routes'

import './App.css'
import Menu from "../components/Menu";

const App = () => (
    <>
        <Menu />
        <main class="App">
            <Routes/>
        </main>
    </>
)

export default App
