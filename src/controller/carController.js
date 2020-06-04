'use strict';

const CarRepository = require('../repository/carRepository');

const redis = require('redis');
const client = redis.createClient();

exports.get = (req, res) => {

    client.get('allCars', function (err, reply) {
        if (reply) {
            const allCars = JSON.parse(reply)
            console.log('redis');
            res.send(allCars)
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


exports.getByPlateNumber = (req, res) => {
    client.get('car', function (err, carCached) {
        if (carCached) {
            const car = JSON.parse(carCached);
            if (car[0].result.veiculo.placa === req.params.placa) {
                console.log('redis');
                res.send(car);
            }
        } else {
            console.log('db');
            CarRepository.getByPlateNumber(req.params.placa)
                .then((car) => {
                    client.set('car', JSON.stringify(car));
                    client.expire('car', 5);
                    res.status(200).send(car);
                }).catch(err => res.status(500).send(err))
        }
    });

};
