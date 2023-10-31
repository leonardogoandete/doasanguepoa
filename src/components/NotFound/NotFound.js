import React from 'react'
import './NotFound.css'

const NotFound = () => {
    return (
        <div class="mainbox">
            <div class="err">404</div>
            <div class="msg">Talvez esta página tenha se movido? Foi deletado? Está se escondendo na quarentena? Nunca existiu em primeiro lugar?
                <p>Vamos para o <a href="/home">inicio</a> e tentar de lá.</p>
            </div>
        </div>

    );
}

export default NotFound
