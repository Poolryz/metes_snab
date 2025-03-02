export const data = [
    {
  id: 1,
  title: "Заявка на закупку оборудования",
  responsible: "Иванов И.И.",
  status: "В обработке",
  invoices: [
    {
      id: 1,
      number: "12345",
      date: "2023-10-01",
      amount: 100000,
    },
  ],
  payment: {
    id: 1,
    number: "54321",
    date: "2023-10-05",
    amount: 100000,
  },
  receipt: {
    id: 1,
    date: "2023-10-10",
    items: [
      {
        name: "Оборудование A",
        quantity: 10,
        price: 10000,
        warehouse: "Склад 1",
      },
    ],
  },
}
]