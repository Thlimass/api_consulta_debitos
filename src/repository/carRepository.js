'use strict';
const Database = require('../database/carDatabaseMock');


module.exports = new class CarRepository {

    getAll() {
        return Database.find();
    }

}
