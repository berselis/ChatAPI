const router = require('express').Router()
const passport = require('passport')
//const messageService = require('../services/messages.services')
const conversationService = require('../services/conversations.services')


router.route('/')
    .get(passport.authenticate('jwt', {session: false}), conversationService.getMyConversation)
    .post(passport.authenticate('jwt', {session: false}), conversationService.createConversation)



router.route('/:conversation_id')
    .get(passport.authenticate('jwt', {session: false}),conversationService.getConversationById)
    .patch(passport.authenticate('jwt', {session: false}),conversationService.updateConversation)
    .delete(passport.authenticate('jwt', {session: false}),conversationService.deleteConversation)
    

module.exports = router