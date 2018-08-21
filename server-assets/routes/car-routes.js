const router = require('express').Router()
let Car = require('../models/Car')

router.get('/:id?', (req, res, next) => {
  if (!req.params.id) {
    //get all pizzas
    Car.find({})
      .then(cars => {
        return res.send(cars)
      })
  }
  Car.findById(req.params.id)
    .then(car => {
      res.send(car)
    })
    .catch(error => {
      res.status(400).send(error)
    })
})

router.post('/', (req, res, next) => {
  let newCar = req.body
  Car.create(newCar)
    .then(car => {
      res.send(car)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/:id', (req, res, next) => {
  Car.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedCar => {
      res.send(updatedCar)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/:id', (req, res, next) => {
  Car.findByIdAndRemove(req.params.id)
    .then(deletedCar => {
      res.send(deletedCar)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


module.exports = router