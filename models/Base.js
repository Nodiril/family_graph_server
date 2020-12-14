'use strict';

const { Model } = require('objection')

class ModelBase extends Model {
    static get modelPaths() {
        return [__dirname];
    }

    $beforeUpdate() {
        delete this.created_at;
        this.updated_at = new Date().toISOString();
    }

    $beforeInsert() {
        this.created_at = new Date().toISOString();
        this.updated_at = new Date().toISOString();
    }
}

module.exports = ModelBase;