'use strict';

const CarRepository = require('../repository/carRepository');

const redis = require('redis');
const client = redis.createClient();

exports.get = (req, res ) => {

    client.get('allCars', function (err, reply) {
        if (reply) {
            console.log('redis');
            res.send(reply)
        } else {
            console.log('db');
            CarRepository.getAll()
                .then((cars) => {
                    client.set('allCars', JSON.stringify(cars));
                    client.expire('allCars', 5);
                    res.status(200).send(cars)
                }).catch(err => res.status(500).send(err));
        }
    });

};
