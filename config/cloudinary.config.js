const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const { app } = require("../app");

cloudinary.config({
  cloud_name: "dhv6exyaj",
  api_key: "388793538281995",
  api_secret: "5NVreX6sx4FqkF8FEiZXDxMr1T8",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: (req, files) => {
      if (files.fieldname === "avatar") {
        return "freeLost/avatars";
      }
      if (files.fieldname === "images") {
        return "freeLost/objects";
      }
    },
  },
});
const upload = multer({ storage: storage });
const cpUpload = upload.fields([
  { name: "avatar", maxCount: 1 },
  { name: "images", maxCount: 3 },
]);

module.exports = cpUpload;
