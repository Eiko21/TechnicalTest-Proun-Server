import express from 'express';
import cors from 'cors';
import { clientTestimonials } from '../data/ClientTestimonials.js';

const app = express();
app.use(cors());

app.get('/testimonials', function (req, res) {
    return res.send(clientTestimonials);
});

app.listen(process.env.PORT || 8080);