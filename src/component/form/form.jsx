import React from "react";
import './form.css'
const Form = () => {
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