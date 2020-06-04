'use strict';
const Database = require('../database/carDatabaseMock');


module.exports = new class CarRepository {

    async getAll() {
        return Database.find();
    }

}
