module.exports = (app) => {
    const multerConfig = require('../lib/multerConfig.js');
    const controller = require('../controllers/index.js');

    /* GET home page. */
    app.get('/', controller.index);
    app.post('/', multerConfig.single('file'), controller.fileUpload);
    app.get('/tasks', controller.tasks);
}