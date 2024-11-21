import React, { useCallback, useEffect, useState } from "react";
import './form.css'
import {useTelegram} from "../../hoock/useTelegram"
const Form = () => {
    const {tg} = useTelegram()
    const [country, setCountry] = useState('')
    const onChangee = (e) => {
        setCountry(e.target.value)
    }    
    const onSendData = useCallback(()=>{
        const data = {
            country
        }
        tg.sendData(JSON.stringify(data))
    }, [country])
    useEffect(()=>{
        tg.onEvent('mainButtonClicked', onSendData)
        return() => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    },[onSendData])


    useEffect(() =>{
        tg.MainButton.setParams({
            text: 'Тик-Тик'
        })
    }, [tg.MainButton])

    useEffect(() =>{
        if(!country){
            tg.MainButton.hide()
        } else{
            tg.MainButton.show()
        }
    }, [country])


    return(
        <div className={"form"}>
            <h3>Введінь дані</h3>
            <input className={"input"} 
            type="text" 
            placeholder={"Країна"} 
            value={country} 
            onChange={onChangee} />
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