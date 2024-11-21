import React, { useEffect } from "react";
import './form.css'
import {useTelegram} from "../../hoock/useTelegram"
const Form = () => {
    const {tg} = useTelegram()

    useEffect(() =>{
        tg.MainButton.show()
        tg.MainButton.setParams({
            text: 'Тик-Тик'
        })
    }, [])


    return(
        <div className={"form"}>
            <h3>Введінь дані</h3>
            <input className={"input"} type="text" placeholder={"Країна"} />
            <select>
                <option value={'legal'}>
                    Юр. лице
                </option>
                <option value={'legal'}>
                    Фіз. лице
                </option>
            </select>
        </div>
    )
}
export default Form