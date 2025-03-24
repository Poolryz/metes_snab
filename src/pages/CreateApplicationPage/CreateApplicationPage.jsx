import { Button, FormLabel, MenuItem } from '@mui/material'
import FormInputComponent from '../../components/FormInputComponent/FormInputComponent.jsx'
import './CreateApplicationPage.scss'
import { useRef, useState } from 'react'

export default function CreateApplicationPage({ heandlerSendData }) {
  const [valueStatus, setValueStatus] = useState('')
  const [valueTitle, setValueTitle] = useState('')
  const [valueUser, setValueUser] = useState('')

  const [fileInvoices, setFileInvoices] = useState([])
  const [filePayment, setFilePayment] = useState([])
  const [filePeceipt, setFilePeceipt] = useState([])

  const buttonClickInvoices = useRef()
  const buttonClickPayment = useRef()
  const buttonClickPeceipt = useRef()

  function heandlerClickInput(buttonSend) {
    buttonSend.current.click()
  }

  function heandlerSetFile(set, e) {
    set(e)
  }

  function funcCleanUseState(method) {
    switch (method) {
      case "clean":
        setValueStatus('')
        setValueTitle('')
        setValueUser('')
        setFileInvoices('')
        setFilePayment('')
        setFilePeceipt('')
        break;

      default:
        break;
    }
  }



  return (
    <div className='create-app-page'>
      <div className='form'>
        <div className='form__flex'>
          <FormLabel className='form__label'>
            Форма для создания заявки
          </FormLabel>
          <FormInputComponent
            setFunc={setValueTitle}
            value={valueTitle}
            placeholder={'Название заявки'}
          />
          <FormInputComponent
            setFunc={setValueUser}
            value={valueUser}
            placeholder={'Ответственный'}
          />
          <FormInputComponent
            setFunc={setValueStatus}
            value={valueStatus}
            helperText={'Выберите статус'}
            select={true}
          >
            <MenuItem value='job'>В работе</MenuItem>
            <MenuItem value='saccess'>Выполнена</MenuItem>
            <MenuItem value='cancel'>Отмена</MenuItem>
          </FormInputComponent>
          <Button
            variant='contained'
            className='form__button'
            color='primary'
            onClick={() => {
              heandlerClickInput(buttonClickInvoices)
            }}
          >
            Прикрепить счет
          </Button>
          <Button
            variant='contained'
            className='form__button'
            color='primary'
            onClick={() => {
              heandlerClickInput(buttonClickPayment)
            }}
          >
            Прикрепить квиток
          </Button>
          <Button
            variant='contained'
            className='form__button'
            color='primary'
            onClick={() => {
              heandlerClickInput(buttonClickPeceipt)
            }}
          >
            Прикрепить УПД
          </Button>

          <Button
            variant='outlined'
            className='form__button'
            color='primary'
            onClick={() => {
              if (!valueTitle || !valueUser || !valueStatus) {
                console.log(Error('Введите данные'))
                return
              }
              heandlerSendData(valueTitle, valueUser, valueStatus, fileInvoices, filePayment, filePeceipt)
              funcCleanUseState("clean")
            }}
          >
            Создать
          </Button>

          <input
            className='form__file'
            type='file'
            ref={buttonClickInvoices}
            onChange={e => {
              heandlerSetFile(setFileInvoices, e.target.files)
            }}
          />
          <input
            className='form__file'
            type='file'
            ref={buttonClickPayment}
            onChange={e => {
              heandlerSetFile(setFilePayment, e.target.files)
            }}
          />
          <input
            className='form__file'
            type='file'
            ref={buttonClickPeceipt}
            onChange={e => {
              heandlerSetFile(setFilePeceipt, e.target.files)
            }}
          />
        </div>
      </div>
    </div>
  )
}
