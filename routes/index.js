const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('inicio', { title: 'Inicio' });
});

router.get('/services', (req, res) => {
  res.render('services', { title: 'Servicios' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'Acerca de' });
});

module.exports = router;
