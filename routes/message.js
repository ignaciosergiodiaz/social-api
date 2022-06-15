'use strict'

const express = require('express'),
    MessageController = require('../controllers/message'),
    api = express.Router(),
    md_auth = require('../middlewares/authenticated');

api.get('/probando-md', md_auth.ensureAuth, MessageController.probando);
api.post('/message', md_auth.ensureAuth, MessageController.saveMessage);
api.get('/my-messages', md_auth.ensureAuth, MessageController.getReceivedMessages);
api.get('/messages', md_auth.ensureAuth, MessageController.getEmmiterMessage);
api.get('/unviewed-messages', md_auth.ensureAuth, MessageController.getUnviewedMessages);

module.exports = api ;