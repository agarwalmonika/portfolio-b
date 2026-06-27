const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { submitContact, getContacts } = require('../controllers/contactController');

const validateContact = [
  body('name').trim().isLength({ min: 2, max: 50 }).withMessage('Name must be 2-50 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please enter a valid email'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().isLength({ min: 10, max: 1000 }).withMessage('Message must be 10-1000 characters')
];

router.post('/', validateContact, submitContact);
router.get('/', getContacts);

module.exports = router;