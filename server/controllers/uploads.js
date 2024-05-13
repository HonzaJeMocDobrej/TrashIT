const imageController = require("./image");
const Uploads = require("../models/uploads")

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
        console.log(err);
            return res.status(500).send(err);
      }
      console.log("File uploaded!")
        next();
    });
}

const saveIntoDb = async (req, res) => {
    try {
        const upload = new Uploads({
            name: req.body.name,
            contact: req.body.contact,
            location: req.body.location,
            nameOfSeller: req.body.nameOfSeller,
            price: req.body.price,
            //imagePath: "http://localhost:3000/img/" + req.file.filename,
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

exports.deleteUpload = async (req, res) => {
    try {
        const data = await Uploads.findByIdAndDelete(req.params.id);
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