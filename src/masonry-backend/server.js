

const express = require('express');

const app = express();

const PORT = 5000;

app.use(express.json());
const cors = require('cors');
app.use(cors());

const customerSubmissions = [];

 app.post('/contact', (req, res) => {
    const { name, phone, address, message } = req.body;
    console.log('Contact form submitted:', { name, phone, address, message });
        //here you would typically handle the form data, e.g., save it to a database or send an email
        //we'll just send a success response
        customerSubmissions.push({ name, phone, address, message });
    res.status(200).json({ message: 'Form submitted successfully' });
    });

app.get('/', (req, res) =>{
    res.send('masonry-backend is running');
    });

    app.get('/contact', (req, res) => {
        res.send(customerSubmissions);
    })

app.listen(PORT, () => {
    console.log(`Masonry Backend is running on http://localhost:${PORT}`);
    });