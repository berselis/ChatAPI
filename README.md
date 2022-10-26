# PostUser
 Practice api post by user
 nodejs => express => sequelizer => postgres => Tokenization => JWT


 -Create user
 http://YOUR_DOMAIN_HERE/api/v1/auth/register
    POST:{
            firstName: 'string',
            lastName: 'string',
            email: 'example@example.com',
            password: 'string',
            phone: '+521231231231',
            birthday: 'YYYY/MM/DD'
        }
-Login user
 http://YOUR_DOMAIN_HERE/api/v1/auth/login
    POST:{
                email: 'example@example.com',
                password: 'string'
            }


-Must be a logged user to use below routes

-Conversation
 http://YOUR_DOMAIN_HERE/api/v1/conversations
    POST: {
         title: 'string',
        imageUrl: 'string'
    }
    GET: []

http://YOUR_DOMAIN_HERE/api/v1/conversations/:conversation_id
    GET: {}
    PATCH: {
        title: 'string',
        imageUrl: 'string'
    }
    DELETE: 

http://YOUR_DOMAIN_HERE/api/v1/conversations/:conversation_id/messages
    GET: []
    POST:{
        message: 'string'
    }

http://YOUR_DOMAIN_HERE/api/v1/conversations/:conversation_id/messages/:message_id
    GET: {}
    DELETE: 

http://YOUR_DOMAIN_HERE/api/v1/conversations/:conversation_id/participants
    GET: []
    POST:{
        userId: 'UUID'
    }

http://YOUR_DOMAIN_HERE/api/v1/conversations/:conversation_id/participants/:participant_id
    GET: {}
    DELETE:





