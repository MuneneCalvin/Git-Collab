import notificationModel from "../Models/notification.model.js";

const  createNotification = async (req, res) => {
    try {
        const notification = new notificationModel(req.body);
        await notification.save();
        res.status(201).send(notification);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getNotifications = async (req, res) => {
    try {
        const notifications = await notificationModel.find();
        res.status(200).send(notifications);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getNotificationById = async (req, res) => {
    try {
        const notification = await notificationModel.findById(req.params.id);
        if (!notification) {
            return res.status(404).send('Notification not found');
        }
        res.status(200).send(notification);
    } catch (error) {
        res.status(400).send(error);
    }
}

const updateNotification = async (req, res) => {
    try {
        const notification = await notificationModel.findByIdAndUpdate
            (req.params.id, req.body
                , { new: true });

        if (!notification) {
            return res.status(404).send('Notification not found');
        }

        res.status(200).send(notification);

    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteNotification = async (req, res) => {
    try {
        const notification = await notificationModel.findByIdAndDelete(req.params.id);

        if (!notification) {
            return res.status(404).send('Notification not found');
        }

        res.status(200).send(notification);

    } catch (error) {
        res.status(400).send(error);
    }
}

export default {
    createNotification,
    getNotifications,
    getNotificationById,
    updateNotification,
    deleteNotification
}