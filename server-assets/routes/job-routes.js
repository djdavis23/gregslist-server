const router = require('express').Router()
let Job = require('../models/Job')

//respond to get requests
router.get('/:id?', (req, res, next) => {
  if (!req.params.id) {
    Job.find({})
      .then(jobs => {
        return res.send(jobs)
      })
  }
  Job.findById(req.params.id)
    .then(job => {
      res.send(job)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/', (req, res, next) => {
  Job.create(req.body)
    .then(job => {
      res.send(job)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/:id', (req, res, next) => {
  Job.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(job => {
      res.send(job)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/:id', (req, res, next) => {
  Job.findByIdAndRemove(req.params.id)
    .then(job => {
      res.send(job)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})








module.exports = router