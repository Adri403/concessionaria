const express = require('express');
const Item = require('../models/item');

const router = express.Router();

// Criar um novo item
router.post('/', async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).send(newItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obter todos os itens
router.get('/', async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
