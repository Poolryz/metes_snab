import { Button, FormLabel, MenuItem, TextField } from '@mui/material'
import './CreateApplicationPage.scss'
import { useState } from 'react'

export default function CreateApplicationPage ({ heandlerSendData }) {
  const [valueStatus, setValueStatus] = useState('')
  const [valueTitle, setValueTitle] = useState('')
  const [valueUser, setValueUser] = useState('')

  return (
    <div className='create-app-page'>
      <div className='form'>
        <div className='form__flex'>
          <FormLabel className='form__label'>
            Форма для создания заявки
          </FormLabel>
          <TextField
            className='form__input'
            value={valueTitle}
            onChange={e => {
              setValueTitle(e.target.value)
            }}
            placeholder='Название заявки'
          />
          <TextField
            className='form__input'
            value={valueUser}
            onChange={e => {
              setValueUser(e.target.value)
            }}
            placeholder='Ответственный'
          />
          <TextField
            className='form__input'
            id='standard-select-currency'
            select
            label=''
            value={valueStatus}
            onChange={e => {
              setValueStatus(e.target.value)
            }}
            helperText='Выбурете статус'
          >
            <MenuItem value='job'>В работе</MenuItem>
            <MenuItem value='saccess'>Выполнена</MenuItem>
            <MenuItem value='cancel'>Отмена</MenuItem>
          </TextField>
          <Button
            variant='outlined'
            className='form__button'
            color='primary'
            onClick={() => {
              if (!valueTitle || !valueUser || !valueStatus) {
                console.log(Error('Введите данные'))
                return
              }
              heandlerSendData(valueTitle, valueUser, valueStatus)
            }}
          >
            Создать
          </Button>
        </div>
      </div>
    </div>
  )
}
