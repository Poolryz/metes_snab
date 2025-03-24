import { useMatch } from "react-router-dom"
import { Paper, Typography, Box, Grid, Divider } from '@mui/material';

export default function ItemApplicationComponent({ data, ...props }) {
    const match = useMatch('/application/:lastPart')
    const id = match?.params.lastPart

    function getApplication(array, id) {
        return array.find((item) => item.id == id)
    }
    const item = getApplication(data, id)

    if (!item) {
        return <Typography variant="h6">Заявка не найдена</Typography>;
    }

    return (
        <Paper elevation={3} sx={{ padding: 3, margin: 2 }}>
            <Typography variant="h4" gutterBottom>
                {item.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Дата: {item.date}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Ответственный: {item.responsible}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Статус: {item.status}
            </Typography>


            {!item.invoices?.number ? null :
                <>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="h5" gutterBottom>
                        Счет
                    </Typography>

                    <Box sx={{ ml: 2 }}>
                        <Typography variant="body1">Номер: {item.invoices.number}</Typography>
                        <Typography variant="body1">Компания: {item.invoices.company}</Typography>
                        <Typography variant="body1">Дата: {item.invoices.date}</Typography>
                        <Typography variant="body1">Сумма: {item.invoices.amount} руб.</Typography>
                    </Box>
                </>
            }



            {!item.payment?.number ? null :
                <>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="h5" gutterBottom>
                        Платежка
                    </Typography>

                    <Box sx={{ ml: 2 }}>
                        <Typography variant="body1">Номер: {item.payment.number}</Typography>
                        <Typography variant="body1">Компания: {item.payment.company}</Typography>
                        <Typography variant="body1">Дата: {item.payment.date}</Typography>
                        <Typography variant="body1">Сумма: {item.payment.amount} руб.</Typography>
                    </Box>
                </>}




            {!item.receipt?.number ? null :
                <>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="h5" gutterBottom>
                        Накладная
                    </Typography>
                    <Box sx={{ ml: 2 }}>
                        <Typography variant="body1">Номер: {item.receipt.number}</Typography>
                        <Typography variant="body1">Компания: {item.receipt.company}</Typography>
                        <Typography variant="body1">Дата: {item.receipt.date}</Typography>
                        <Typography variant="h6" gutterBottom>
                            Товары:
                        </Typography>
                        <Grid container spacing={2}>
                            {item.receipt.items.map((product, index) => (
                                <Grid item xs={12} key={index}>
                                    <Paper elevation={2} sx={{ padding: 2 }}>
                                        <Typography variant="body1">Название: {product.name}</Typography>
                                        <Typography variant="body1">Количество: {product.quantity}</Typography>
                                        <Typography variant="body1">Цена: {product.price} руб.</Typography>
                                        <Typography variant="body1">Склад: {product.warehouse}</Typography>
                                        <Typography variant="body1">Сумма: {product.amount} руб.</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </>}


        </Paper>
    )
}