const uuid = require('uuid')
const Conversation = require('../models/conversations.models')

const getAllConversations = async () => {
    const data = await Conversation.findAll()
    return data
}

const getConversationById = async (idConversation, userId) => {
    const data = await Conversation.findOne({
        where: {
            id: idConversation,
            userId
        }
    })
    return data
}

const getConversationByuserId = async (id) => {
    const data = await Conversation.findAll({
        where: {
            userId: id
        }
    })
    return data
}

const createConversation = async (data) => {

    console.log(data, typeof (uuid.v4));

    const newData = await Conversation.create({
        id: uuid.v4(),
        title: data.title,
        imageUrl: data.imageUrl,
        userId: data.userId
    })
    return newData
}

const updateConversation = async (id, data, userId) => {
    const result = await Conversation.update(data, {
        where: {
            id,
            userId
        }
    })
    return result
}

const deleteConversation = async (id, data) => {
    const newData = await Conversation.destroy(data, {
        where: {
            id
        }
    })
    return newData
}

module.exports = {
    getAllConversations,
    getConversationById,
    createConversation,
    updateConversation,
    deleteConversation,
    getConversationByuserId
}



