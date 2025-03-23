const express = require('express');
const router = express.Router();
const auth = require('../../middelwares/auth');
const meetingController = require('./meeting.controller');

// Meeting routes
router.post('/', auth, meetingController.createMeeting);
router.get('/', auth, meetingController.getMeetings);
router.get('/:id', auth, meetingController.getMeeting);
router.put('/:id', auth, meetingController.updateMeeting);
router.delete('/:id', auth, meetingController.deleteMeeting);

module.exports = router;