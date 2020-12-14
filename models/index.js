'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const { Model } = require('objection')
const models = {};

class ModelBase extends Model {
    static get modelPaths() {
        return [__dirname];
    }

    $beforeUpdate() {
        delete this.createdAt;
        this.updatedAt = new Date().toISOString();
    }

    $beforeInsert() {
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }
}
 
fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file));
        models[model.name] = model;
    });

module.exports = models;
