import { Button, FormLabel, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export default function CreateApplicationPage({heandlerSendData}){
    const [valueStatus, setValueStatus] = useState('lol')
    const [valueTitle, setValueTitle] = useState('lol')
    const [valueUser, setValueUser] = useState('lol')
    function heandlerChangeStatus (e){
        setValueStatus(e.target.value)
    }
    function hendlerChangeTitle(e){
        setValueTitle(e.target.value)
    }
    function hendlerChangeUser(e){
        setValueUser(e.target.value)
    }
    
    return(
        <>
        <FormLabel>Форма для создания заявки</FormLabel> <br />
        <TextField value={valueTitle} onChange={(e)=>{
            hendlerChangeTitle(e)
        }} placeholder="Название заявки"/> <br />
        <TextField value={valueUser} onChange={(e)=>{
            hendlerChangeUser(e)
        }} placeholder="Ответственный"/> <br />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={valueStatus}
          onChange={(e)=>{
            heandlerChangeStatus(e)
          }}
          helperText="Выбурете статус"

        >
            <MenuItem value='lol'>
                LOL
            </MenuItem>
            <MenuItem value='notlol'>
                NOTLOL
            </MenuItem>

        </TextField> <br />
        <Button onClick={()=>{
            heandlerSendData(valueTitle, valueUser, valueStatus)
        }} color="primary">Создать</Button>
        </>
        
    )
}
