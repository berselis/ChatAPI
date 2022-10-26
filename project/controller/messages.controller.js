const uuid = require('uuid')
const Conversations = require('../models/conversations.models')
const Messages = require('../models/messages.models')
const Users = require('../models/users.model')

const getAllMessages = async () => {
    const data = await Messages.findAll()
    return data
}

const getMessagesByIdOfConversation = async (id) => {
    const data = await Messages.findAll({
        where: {
            conversationId : id
        },
        attributes: {
            exclude: ['userId','conversationId']
        },
        include:[
            {           
                model: Conversations,
                attributes: ['id', 'title', 'imageUrl']
            },
            {
                model: Users,
                attributes: ['id', 'firstName', 'lastName']
            }
        ]
        // include: {           
        //     model: Conversations,
        //     attributes: ['id', 'title', 'imageUrl']
        // },
        // include: {
        //     model: Users,
        //     attributes: ['id', 'firstName', 'lastName']
        // }

    })
    return data
}

const createMessage = async (data) => {
    const newMessage = await Messages.create({
        id: uuid.v4(),
        userId: data.userId,
        conversationId: data.conversationId,
        message: data.message
    })
    return newMessage
}

const updateMessage = async(id, data) => {
    const newData = await Messages.update(data, {
        where: {
            id
        }
    })
    return newData
}

const  deleteMessage = async (id) => {
    const data = await Messages.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllMessages,
    getMessagesByIdOfConversation,
    createMessage,
    updateMessage,
    deleteMessage
}