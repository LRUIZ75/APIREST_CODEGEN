// Last Updated: 07/06/2021 01:22:45 a. m.
// Updated By  : Luis Danilo Ruiz Tórrez
'use strict'

const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

//TODO: Una vez generado, estos modelos requeren modificación manual para ajustar sus propiedades y validaciones!!!
const ProcessingCentersSchema = Schema({
  "name": {
    "type": "String"
  },
  "location": {
    "lat": {
      "type": "Number"
    },
    "lng": {
      "type": "Number"
    }
  },
  "company": {
    "type": "ObjectId"
  },
  "picture": {
    "type": "String"
  },
  "googlemap": {
    "type": "String"
  }
});

//TODO: Una vez generado, estos modelos requeren modificación manual para ajustar sus propiedades y validaciones!!!
/**
 * @swagger
 * components:
 *   schemas:
 *     ProcessingCenters:
 *       required: 
 *         - "name"
 *         - "location"
 *         - "company"
 *         - "picture"
 *         - "googlemap"
 *       properties: 
 *         name: 
 *           type: "string"
 *           example: "Processing Center"
 *         location: 
 *           required: 
 *             - "lat"
 *             - "lng"
 *           properties: 
 *             lat: 
 *               type: "number"
 *               example: 12
 *             lng: 
 *               type: "number"
 *               example: 86
 *           type: "object"
 *         company: 
 *           type: "string"
 *           example: "123456123456123456123456"
 *         picture: 
 *           type: "string"
 *           example: "some.png"
 *         googlemap: 
 *           type: "string"
 *           example: "http://map.google.com/xyz"

 */

module.exports = mongoose.model('ProcessingCenters',ProcessingCentersSchema);
// mongoDB creará la collección, con documentos de estructura del modelo.

