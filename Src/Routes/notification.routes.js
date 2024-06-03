const express = require('express');
import notificationController from '../Controllers/notification.controller.js';

const router = express.Router();

router.post('/', notificationController.createNotification);
router.get('/', notificationController.getNotifications);
router.get('/:id', notificationController.getNotificationById);
router.put('/update/:id', notificationController.updateNotification);
router.delete('/delete/:id', notificationController.deleteNotification);

module.exports = router;