import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Paper,
    Typography,
    Box,
    Divider,
    CircularProgress,
    Alert
} from '@mui/material';

export default function ApplicationDetail() {
    const { id } = useParams();
    const [application, setApplication] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplication = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/applications/${id}`);
                if (!response.ok) {
                    throw new Error('Заявка не найдена');
                }
                const data = await response.json();
                setApplication(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchApplication();
    }, [id]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" p={3}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Alert severity="error" sx={{ m: 2 }}>
                {error}
            </Alert>
        );
    }

    if (!application) {
        return (
            <Typography variant="h6" sx={{ p: 2 }}>
                Заявка не найдена
            </Typography>
        );
    }

    return (
        <Paper elevation={3} sx={{ p: 3, m: 2 }}>
            <Typography variant="h4" gutterBottom>
                {application.title}
            </Typography>

            <Box display="flex" gap={3} mb={2}>
                <Typography>Номер: {application.number}</Typography>
                <Typography>Статус: {application.status}</Typography>
                <Typography>Дата: {new Date(application.date).toLocaleDateString()}</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
                Основная информация
            </Typography>
            <Typography>Ответственный: {application.responsible}</Typography>

            {application.invoices && (
                <>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6" gutterBottom>
                        Счет
                    </Typography>
                    <Typography>Номер: {application.invoices.number}</Typography>
                    <Typography>Номер: {application.invoices.date}</Typography>
                </>
            )}

            {application.receipt && (
                <>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6" gutterBottom>
                        Оплата
                    </Typography>
                    <Typography>Номер: {application.receipt.number}</Typography>
                    <Typography>Номер: {application.receipt.date}</Typography>
                </>
            )}

            {application.receipt && (
                <>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6" gutterBottom>
                        Накладная
                    </Typography>
                    <Typography>Номер: {application.receipt.number}</Typography>
                    <Typography>Номер: {application.receipt.date}</Typography>

                    <Typography>Сумма: {application.receipt.amount} руб.</Typography>
                    {application.receipt.items.map((item, index) => (
                        <Box key={index} sx={{ mb: 2, p: 2, border: '1px solid #eee' }}>
                            <Typography>Товар: {item.name}</Typography>
                            <Typography>Количество: {item.quantity}</Typography>
                            <Typography>Цена: {item.price} руб.</Typography>
                            <Typography>Склад: {item.warehouse}</Typography>
                        </Box>
                    ))}
                </>
            )}
        </Paper>
    );
}