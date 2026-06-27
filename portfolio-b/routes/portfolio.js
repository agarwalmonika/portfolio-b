const express = require('express');
const router = express.Router();
const { getProjects, getSkills, seedData } = require('../controllers/portfolioController');

router.get('/projects', getProjects);
router.get('/skills', getSkills);
router.get('/seed', seedData); // Visit once to populate DB

module.exports = router;