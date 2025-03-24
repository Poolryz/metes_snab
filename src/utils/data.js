export const data = [
  {
    id: 2,
    title: 'Заявка на закупку оборудования',
    number: 1,
    responsible: 'Иванов И.И.',
    status: 'В обработке',
    date: '2023-10-01',
    status: 'В работе',
    invoices:
    {
      id: 1,
      company: 'ООО ПКП МетЭс',
      number: '12345',
      date: '2023-10-01',
      amount: 100000,
      chois: false
    }
    ,
    payment:
    {
      id: 1,
      company: 'ООО ПКП МетЭс',
      number: '54321',
      date: '2023-10-05',
      amount: 100000
    },
    receipt:
    {
      id: 1,
      company: 'ООО ПКП МетЭс',
      number: '54321',
      date: '2023-10-10',
      items:
        [
          {
            name: 'Оборудование A',
            quantity: 10,
            price: 10000,
            warehouse: 'Склад 1',
            amount: 100000
          }
        ]
    }
  }
]
