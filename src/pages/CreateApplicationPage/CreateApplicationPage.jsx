import { Button, FormLabel, MenuItem } from '@mui/material'
import FormInputComponent from '../../components/FormInputComponent/FormInputComponent.jsx'
import './CreateApplicationPage.scss'
import { useRef, useState } from 'react'

export default function CreateApplicationPage({ heandlerSendData }) {
  const [valueStatus, setValueStatus] = useState('')
  const [valueTitle, setValueTitle] = useState('')
  const [valueUser, setValueUser] = useState('')

  const [numberInvoise, setNumberInvoise] = useState('')
  const [numberPayment, setNumberPayment] = useState('')
  const [numberReceipt, setNumberReceipt] = useState('')

  const [dateInvoise, setDateInvoise] = useState('')
  const [datePayment, setDatePayment] = useState('')
  const [dateReceipt, setDateReceipt] = useState('')


  const [fileInvoices, setFileInvoices] = useState([])
  const [filePayment, setFilePayment] = useState([])
  const [fileReceipt, setFileReceipt] = useState([])

  const buttonClickInvoices = useRef()
  const buttonClickPayment = useRef()
  const buttonClickReceipt = useRef()

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
        setFileReceipt('')
        setNumberInvoise('')
        setNumberPayment('')
        setNumberReceipt('')
        setDateInvoise('')
        setDatePayment('')
        setDateReceipt('')
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
            <MenuItem value='В работе'>В работе</MenuItem>
            <MenuItem value='Выполнено'>Выполнена</MenuItem>
            <MenuItem value='Закрыто'>Отмена</MenuItem>
          </FormInputComponent>
          <FormInputComponent
            setFunc={setNumberInvoise}
            value={numberInvoise}
            placeholder={'№ Счета'}
          />
          <FormInputComponent
            setFunc={setDateInvoise}
            value={dateInvoise}
            placeholder={'Дата выставления счета'}
          />
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
          <FormInputComponent
            setFunc={setNumberPayment}
            value={numberPayment}
            placeholder={'№ Квитка'}
          /><FormInputComponent
            setFunc={setDatePayment}
            value={datePayment}
            placeholder={'Дата оплаты'}
          />

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
          <FormInputComponent
            setFunc={setNumberReceipt}
            value={numberReceipt}
            placeholder={'№ УПД'}
          />
          <FormInputComponent
            setFunc={setDateReceipt}
            value={dateReceipt}
            placeholder={'Дата УПД'}
          />
          <Button
            variant='contained'
            className='form__button'
            color='primary'
            onClick={() => {
              heandlerClickInput(buttonClickReceipt)
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
              heandlerSendData(valueTitle, valueUser, valueStatus, numberInvoise, dateInvoise, fileInvoices, numberPayment, datePayment, filePayment, numberReceipt, dateReceipt, fileReceipt)
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
            ref={buttonClickReceipt}
            onChange={e => {
              heandlerSetFile(setFileReceipt, e.target.files)
            }}
          />
        </div>
      </div>
    </div>
  )
}
