const router = require('express').Router()
const passport = require('passport')
//const messageService = require('../services/messages.services')
const conversationService = require('../services/conversations.services')
require('../middlewares/auth.middleware')(passport)


router.route('/')
    .get(passport.authenticate('jwt', {session: false}), conversationService.getMyConversations)
    .post(passport.authenticate('jwt', {session: false}), conversationService.createConversation)



router.route('/:conversation_id')
    .get(passport.authenticate('jwt', {session: false}),conversationService.getMyConversationById)
    .patch(passport.authenticate('jwt', {session: false}),conversationService.updateConversation)
    .delete(passport.authenticate('jwt', {session: false}),conversationService.deleteMyConversation)
    

module.exports = router