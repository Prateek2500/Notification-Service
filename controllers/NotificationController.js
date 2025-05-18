const Notification = require("../models/Notification");
const { sendEmail } = require("../utils/emailService");
const { sendSMS } = require("../utils/smsService.js");

exports.sendNotification = async (req, res) => {
  const { userId, type, message } = req.body;

  const notification = new Notification({ userId, type, message });
  await notification.save();

  if (type === "email") await sendEmail(userId, message);
  else if (type === "sms") await sendSMS(userId, message);

  res.status(200).json({ success: true, notification });
};

exports.getUserNotifications = async (req, res) => {
  const { id } = req.params;
  const notifications = await Notification.find({ userId: id }).sort({ createdAt: -1 });
  res.json(notifications);
};
