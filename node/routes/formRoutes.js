const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Get all form fields
router.get('/', async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new form field
router.post('/', async (req, res) => {
    const form = new Form({
        fieldName: req.body.fieldName,
        fieldType: req.body.fieldType
    });

    try {
        const newForm = await form.save();
        res.status(201).json(newForm);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
