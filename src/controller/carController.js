'use strict';

const CarRepository = require('../repository/carRepository');

exports.get = (req, res) => {
    CarRepository.getAll().then(cars => {
        res.status(200).send(cars)
    }).catch(err => res.status(500).send(err));
};
