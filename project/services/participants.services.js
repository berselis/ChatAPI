const participantController = require('../controller/participants.controller');


const getAllParticipants = (req, res) => {
    const conversarion_id = req.params.conversation_id;
    const userId = req.user.id;
    participantController.getParticipantByIdConversation(conversarion_id, userId)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(400).json({ message: 'invalid convertation for this user' })
            }
        }).catch(error => res.status(400).json({ message: error.message }))
};


const addParticipant = (req, res) => {
    const conversarion_id = req.params.conversation_id;
    const { userId } = req.body;
    if (conversarion_id && userId) {




        participantController.addParticiparToConvertation(conversarion_id, userId)
            .then(data => {
                res.status(201).json(data)

            }).catch(error => res.status(400).json({ message: error.message }))



            

    } else {
        res.status(400).json({
            message: `Missing Data, conversation_id`,
            fields: {
                userId: 'uuid'
            }
        })
    }

}










module.exports = {
    getAllParticipants,
    addParticipant
}