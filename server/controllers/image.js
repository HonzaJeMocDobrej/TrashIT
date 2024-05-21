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
     const {name, contact, location, nameOfSeller, price, category, password, passwordAuth} = req.body;
    if(!name, !contact, !location, !nameOfSeller, !price, !category, !password, !passwordAuth)
        return cb(new Error("Something is missing"))

    
    if(password != passwordAuth) return cb(new Error("password should be the same"))

    if (typeof contact != "string" )return cb(new Error("contact should be type number"))
    if (typeof price != "string") return cb(new Error("price should be type number"))


    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/webm" ||
    file.mimetype === "image/gif" ||
    file.mimetype === "image/svg+xml"
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