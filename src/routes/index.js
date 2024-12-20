'use strict'

const express = require('express')
const { apiKey, permision } = require('../auth/checkAuth')
const router = express.Router()

// check Api Key
// router.use(apiKey)
// router.use(permision('0000'))
// check permision

// router.use('/v1/api/product', require('./product'))
// router.use('/v1/api/discount', require('./discount'))
// router.use('/v1/api/cart', require('./cart'))
// router.use('/v1/api/comment', require('./comment'))
// router.use('/v1/api/notification', require('./notification'))
// router.use('/v1/api/upload', require('./upload'))
// router.use('/v1/api', require('./access'))
router.get('/check', (req, res, next) => {
    res.status(200).json({
        message: 'success',
        data: {
            name: "goldz"
        }
    })
})
router.get('/api/get', (req, res, next) => {
    res.status(200).json({
        message: 'success',
        data: [
            {
                name: "goldz",
                age: 20
            },
            {
                name: "goldz2",
                age: 33
            },
            {
                name: "goldz3",
                age: 44
            }
        ]
    })
})

module.exports = router
