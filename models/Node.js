'use strict'

const ModelBase = require("./Base");

class Node extends ModelBase {
    // Table name is the only required property.
    static get tableName() {
        return 'nodes'
    }
}

module.exports = Node;