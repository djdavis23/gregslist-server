const router = require('express').Router()
let House = require('../models/House')

//respond to get request
router.get('/:id?', (req, res, next) => {
  if (!req.params.id) {
    House.find({})
      .then(houses => {
        return res.send(houses)
      })
  }
  House.findById(req.params.id)
    .then(house => {
      res.send(house)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//respond to post request
router.post('/', (req, res, next) => {
  House.create(req.body)
    .then(house => {
      res.send(house)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//respond to put requests
router.put('/:id', (req, res, next) => {
  House.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(house => {
      res.send(house)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//respond to delete
router.delete('/:id', (req, res, next) => {
  House.findByIdAndRemove(req.params.id)
    .then(house => {
      res.send(house)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})




module.exports = router