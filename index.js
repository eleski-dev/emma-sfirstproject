const express = require('express');
const app = express();
const router = require('./src/routes/products.route');
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, This Project Is for Immanuel. ')
});

app.use('/api/v1/products', router);

app.use((err, req, res, next) => {
    console.error(`[ERROR] ${err.message}`);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        data: null
    })
})

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
