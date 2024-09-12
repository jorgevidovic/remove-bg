const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const sharp = require('sharp');
require('dotenv').config();

const inputFolder = path.join(__dirname, 'images');
const outputFolder = path.join(__dirname, 'output');
const apiKey = process.env.REMOVE_BG_API_KEY;

fs.ensureDirSync(inputFolder);
fs.ensureDirSync(outputFolder);

const removeBackground = async (imagePath, outputPath) => {
  const imageBuffer = await fs.readFile(imagePath);

  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.remove.bg/v1.0/removebg',
      data: {
        image_file_b64: imageBuffer.toString('base64'),
      },
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      responseType: 'arraybuffer',
    });

    await fs.writeFile(outputPath, response.data);
    console.log(`Fondo eliminado para: ${path.basename(imagePath)}`);
  } catch (error) {
    console.error(`Error eliminando fondo para ${imagePath}:`, error.message);
  }
};

const processImages = async () => {
  const files = await fs.readdir(inputFolder);
  const images = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

  if (images.length === 0) {
    console.log('No se encontraron imágenes en la carpeta de entrada.');
    return;
  }

  for (const image of images) {
    const imagePath = path.join(inputFolder, image);
    const outputPath = path.join(outputFolder, `no-bg-${image}`);

    await removeBackground(imagePath, outputPath);
  }

  console.log('Procesamiento completado.');
};

processImages();
