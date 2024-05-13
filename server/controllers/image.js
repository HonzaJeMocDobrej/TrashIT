const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/img"));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const filter = (req, file, cb) => {
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/webm" ||
    file.mimetype === "image/gif" 
    ? cb(null, true)
    : cb(null, false);
};

exports.upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1021 * 10
    },
    fileFilter: filter
});