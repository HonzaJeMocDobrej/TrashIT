const imageController = require("./image");
const Uploads = require("../models/uploads")
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getUploads = async (req, res) => {
  try {
    const result = await Uploads.find();
    if(result && result.lenght !== 0){
        return res.status(200).send({
            msg: "Uploads found!",
            payload: result,
        })
    }
    res.status(500).send({msg: "gg"});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.getUpload = async (req, res) => {
    try {
        const result = await Uploads.findById(req.params.id);
        if(result){
            return res.status(200).send({
                msg: "Upload found!",
                payload: result,
            })
        }
        res.status(500).send({msg: "gg"});
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
};

const uploadFile = imageController.upload.single("imageFile");

const saveFileIntoFolder = (req, res, next) => {
     uploadFile(req, res, (err) => {
      if(err){
            switch(err.message) {
                case "Something is missing":
                    return res.status(400).send({msg: 'Something is missing'})
                case "password should be the same":
                    return res.status(400).send({msg: 'Passwords should be same'})
                case "contact should be type number":
                    return res.status(400).send({msg: 'Contact should be type number'})
                case "price should be type number":
                    return res.status(400).send({msg: 'Price should be type number'})
                case "File not found":
                    return res.status(400).send({msg: 'File not found'})
            }
            return res.status(500).send(err);
      }
        console.log("File uploaded!")
        next();
    });
}

const saveIntoDb = async (req, res) => {
 
    try {
        if (!req.file) return res.status(400).send({msg: 'File not found'})
        const upload = new Uploads({
            name: req.body.name,
            contact: req.body.contact,
            location: req.body.location,
            nameOfSeller: req.body.nameOfSeller,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            password: bcrypt.hashSync(req.body.password, saltRounds),
            imagePath: "http://localhost:3000/img/" + req.file.filename,
        });
        const result = await upload.save(); 
        if(result){
            return res.status(201).send({
                msg: "Upload uploaded",
                payload: result
            })
        }
        return res.status(500).send({msg: "nejde nic"});
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error,
        });
    }
}

exports.updateUpload = async (req, res) => {
    try {
        const upload = {
            name: req.body.name,
            contact: req.body.contact,
            location: req.body.location,
            nameOfSeller: req.body.nameOfSeller,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            password: bcrypt.hashSync(req.body.password, saltRounds),
            //imagePath: "http://localhost:3000/img/" + req.file.filename,
        };
        const result = await Uploads.findByIdAndUpdate(req.params.id, upload);
        if(result){
            return res.status(201).send({
                msg: "Upload updated",
                payload: result
            })
        }
        return res.status(500).send({msg: "nejde update"});

    } catch (error) {
        res.status(500).send({
            error,
        });
    }
}

// S láskou Fida <3
exports.deleteUpload = async (req, res) => {
    try {
        if(!req.body.password) return res.status(400).send({msg: "Something is missing"});
        
        const data = await Uploads.findById(req.params.id);
        const match = await bcrypt.compare(req.body.password, data.password);

        if(!match) return res.status(400).send({msg: "Passwords do not match"});
        const deletedUpload = await Uploads.findByIdAndDelete(req.params.id);

        if(!deletedUpload) return res.status(500).send({msg: "Something went wrong"});
        return res.status(200).send({msg: "Succesful", payload: deletedUpload});

    } catch (error) {
        res.status(500).send({
            error,
        });
    }
}

exports.deleteAllUploads = async (req, res) => {
    try {
        const data = await Uploads.deleteMany();
        if(data){
            return res.status(200).send({
                msg: "Upload deleted",
                payload: data,
            });
        }
        res.status(500).send({
            msg: "Error"
        });
    } catch (error) {
        res.status(500).send({
            error,
        });
    }
}

exports.postUpload = [saveFileIntoFolder, saveIntoDb];

