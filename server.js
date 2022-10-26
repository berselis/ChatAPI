const express = require('express');
const db = require('./project/utils/database');
const initModels = require('./project/models/initModels');
const { port } = require('./config');
const userRouter = require('./project/routers/users.router');
const authRouter = require('./project/auth/auth.router');
<<<<<<< HEAD
const conversationRouter = require('./project/routers/conversations.router')
const messageRouter = require('./project/routers/messages.router')
=======
const conversationRouter = require('./project/routers/conversations.router');
const participantsRouter = require('./project/routers/participants.router');

>>>>>>> 2879733a2b6cde6360939d5b05c5efbf3f2b7122

const server = express();


server.use(express.json());

db.authenticate()
    .then(() => console.log('Server authenticated'))
    .catch(error => console.log(error));

db.sync()
    .then(() => console.log('Database synced'))
    .catch(error => console.log(error));

initModels();

server.get('/', (_, res) => {
    res.status(200).json({ message: 'OK!', users: `localHost:${port}/api/v1/users` })
});

server.use('/api/v1/auth', authRouter);
server.use('/api/v1/users', userRouter);


<<<<<<< HEAD
server.use('/api/v1/conversations', conversationRouter)
server.use('/api/v1/conversations', messageRouter)
=======
server.use('/api/v1/conversations', conversationRouter);
server.use('/api/v1/conversations', participantsRouter);

>>>>>>> 2879733a2b6cde6360939d5b05c5efbf3f2b7122

server.listen(port, () => console.log(`Server started at port ${port}`));