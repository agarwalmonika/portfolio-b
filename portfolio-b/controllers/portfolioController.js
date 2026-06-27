const Project = require('../models/Project');
const Skill = require('../models/Skill');

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json({ success: true, data: skills });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Seed initial data (run once)
exports.seedData = async (req, res) => {
  try {
    await Project.deleteMany({});
    await Skill.deleteMany({});

    await Project.insertMany([
      {
        title: 'Personal Portfolio Website',
        description: 'Full-stack portfolio built with Node.js, Express and MongoDB. Features dynamic content loading via REST APIs, contact form with email integration, MVC architecture, Helmet.js security and MongoDB storage.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
        liveUrl: '#',
        githubUrl: 'https://github.com/agarwalmonika',
        featured: true,
        order: 1
      },
      {
        title: 'To-Do List App',
        description: 'An interactive To-Do List web app using vanilla JavaScript with full CRUD operations — add, edit and delete tasks with instant UI updates and no page refresh. Beginner-friendly and clean UI.',
        techStack: ['HTML5', 'CSS3', 'JavaScript'],
        liveUrl: '#',
        githubUrl: 'https://github.com/agarwalmonika/to-do-list-app',
        featured: true,
        order: 2
      }
    ]);

    await Skill.insertMany([
      { name: 'HTML5', category: 'frontend', level: 90, icon: 'fab fa-html5' },
      { name: 'CSS3', category: 'frontend', level: 85, icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', category: 'frontend', level: 78, icon: 'fab fa-js' },
      { name: 'React.js', category: 'frontend', level: 72, icon: 'fab fa-react' },
      { name: 'Node.js', category: 'backend', level: 65, icon: 'fab fa-node-js' },
      { name: 'Express.js', category: 'backend', level: 65, icon: 'fas fa-server' },
      { name: 'MongoDB', category: 'backend', level: 62, icon: 'fas fa-database' },
      { name: 'REST APIs', category: 'backend', level: 65, icon: 'fas fa-plug' },
      { name: 'C++', category: 'languages', level: 75, icon: 'fas fa-code' },
      { name: 'Python', category: 'languages', level: 55, icon: 'fab fa-python' },
      { name: 'Git & GitHub', category: 'tools', level: 80, icon: 'fab fa-git-alt' },
      { name: 'VS Code', category: 'tools', level: 90, icon: 'fas fa-laptop-code' }
    ]);

    res.json({ success: true, message: 'Data seeded successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};