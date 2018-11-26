'use strict'
import fs from 'fs'
import path from 'path'

const BASENAME = path.basename(__filename);

var ctrl = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== BASENAME) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var fileName = path.basename(file,'.js');
    ctrl[fileName] = require('./'+fileName);;
    console.log(ctrl);
  });

export default ctrl;