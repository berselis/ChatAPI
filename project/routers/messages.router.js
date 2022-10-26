const router = require('express').Router()
const messageServices = require('../services/messages.services')
const passport = require('passport')

router.route('/:conversation_id/messages')
    .post(passport.authenticate('jwt', {session: false}), messageServices.createMessage)
    .get(passport.authenticate('jwt', {session: false}), messageServices.getMessagesByIdOfconversation)




module.exports = router
