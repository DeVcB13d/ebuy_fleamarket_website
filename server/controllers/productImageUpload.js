// Require the cloudinary library
const cloudinary = require('cloudinary').v2;
require('dotenv').config()  


const uploadImage = async (req,res) => {

  cloudinary.config({ 
    secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });
    // Get the path image that will be uploaded
    const imagePath = req.body.imagePath;
    console.log(imagePath);

    // Use the uploaded file's name as the asset's public ID and
    // allow overwriting the asset with new versions
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };
  
  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({error: error.message})
    console.error(error);
  }
};

const getAssetInfo = async (req,res) => {
  cloudinary.config({ 
    secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });
    // Get the public ID of the asset
    const publicId = req.body.publicId;
    // Return colors in the response
    const options = {
        colors: true,
    };

  try {
    // Get details about the asset
    const result = await cloudinary.api.resource(publicId, options);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({error: error.message})
    console.error(error);
  }
};

const createImageTag = (publicId, ...colors) => {
  // Set the effect color and background color
  const [effectColor, backgroundColor] = colors;

  // Create an image tag with transformations applied to the src URL
  let imageTag = cloudinary.image(publicId, {
    transformation: [
      { width: 250, height: 250, gravity: "faces", crop: "thumb" },
      { radius: "max" },
      { effect: "outline:10", color: effectColor },
      { background: backgroundColor },
    ],
  });

  return imageTag;
};

module.exports = {
    uploadImage,
    getAssetInfo,
    createImageTag
};