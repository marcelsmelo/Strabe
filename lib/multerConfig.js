const multer = require('multer')
const path = require('path')
const fs = require('fs')
const baseFolder = path.join(__dirname, '..', 'uploads');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const uploadFolder = baseFolder + '/teste';
        fs.access(uploadFolder, (err) => {
            console.log(err)
            if (err) {
                fs.mkdirSync(uploadFolder)
                cb(null, uploadFolder);
            }
            if (err == null) {
                cb(null, uploadFolder);
            } else {

            }
        });
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

module.exports = multer({ storage: storage });