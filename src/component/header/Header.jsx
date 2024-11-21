import React from "react";
import Button from "../button/Button";
import './header.css'

const Header = () => {
    const tg = window.Telegram.WebApp
    const onClose = () => {
        tg.close()
    }
    return (
        <div className={'header'}>
            <button onClick={onClose}>Close</button>
            <span className={'username'}>
                {tg.initDataUsafe?.user?.username}
            </span>
        </div>
    )
}