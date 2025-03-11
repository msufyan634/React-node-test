const MeetingHistory = require('../../model/schema/meeting');

// Get all meetings
const index = async (req, res) => {
    try {
        const query = req.query;
        query.deleted = false;

        let meetings = await MeetingHistory.find(query).populate({
            path: 'createBy',
            match: { deleted: false }
        }).exec();

        meetings = meetings.filter(meeting => meeting.createBy !== null);
        res.status(200).json(meetings);
    } catch (err) {
        console.error('Failed to fetch meetings:', err);
        res.status(500).json({ error: 'Failed to fetch meetings' });
    }
};

// Get a single meeting by ID
const view = async (req, res) => {
    try {
        let meeting = await MeetingHistory.findOne({ _id: req.params.id });
        if (!meeting) return res.status(404).json({ message: "Meeting not found" });
        res.status(200).json(meeting);
    } catch (err) {
        console.error('Failed to fetch meeting:', err);
        res.status(500).json({ error: 'Failed to fetch meeting' });
    }
};

// Create a new meeting
const add = async (req, res) => {
    try {
        req.body.createdDate = new Date();
        const meeting = new MeetingHistory(req.body);
        await meeting.save();
        res.status(201).json(meeting);
    } catch (err) {
        console.error('Failed to create meeting:', err);
        res.status(400).json({ error: 'Failed to create meeting' });
    }
};

// Update a meeting
const edit = async (req, res) => {
    try {
        let updatedMeeting = await MeetingHistory.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        );
        if (!updatedMeeting) return res.status(404).json({ message: "Meeting not found" });
        res.status(200).json(updatedMeeting);
    } catch (err) {
        console.error('Failed to update meeting:', err);
        res.status(400).json({ error: 'Failed to update meeting' });
    }
};

// Soft delete a single meeting
const deleteData = async (req, res) => {
    try {
        const meeting = await MeetingHistory.findByIdAndUpdate(req.params.id, { deleted: true });
        if (!meeting) return res.status(404).json({ message: "Meeting not found" });
        res.status(200).json({ message: "Meeting deleted successfully", meeting });
    } catch (err) {
        console.error('Failed to delete meeting:', err);
        res.status(400).json({ error: 'Failed to delete meeting' });
    }
};

// Soft delete multiple meetings
const deleteMany = async (req, res) => {
    try {
        const meetings = await MeetingHistory.updateMany(
            { _id: { $in: req.body } },
            { $set: { deleted: true } }
        );
        res.status(200).json({ message: "Meetings deleted successfully", meetings });
    } catch (err) {
        console.error('Failed to delete meetings:', err);
        res.status(400).json({ error: 'Failed to delete meetings' });
    }
};

module.exports = { index, view, add, edit, deleteData, deleteMany };