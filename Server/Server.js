const express = require('express'); // Импортируем express
const path = require('path'); // Импортируем модуль path для работы с путями
const server = express(); // Инициализируем сервер
const PORT = 5000; // Порт, на котором будет работать сервер

server.use(express.json());


server.get('/', (req, res) => {
    // Отправляем файл index.html в ответ на запрос
    res.sendFile(path.join(__dirname, 'index.html'));
});


server.get('/api/data', (req, res) => {
    const data = {
        message: 'Это данные из API',
        timestamp: new Date(),
    };

    res.json(data);
});


server.post('/api/data', (req, res) => {
    const receivedData = req.body; // Получаем данные из запроса
    console.log('Получены данные:', receivedData);
    // Отправляем ответ клиенту
    res.status(201).json({ message: 'Данные успешно получены', receivedData });
});


server.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});