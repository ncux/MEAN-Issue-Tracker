const express = require('express');
const router = express.Router();

const Issue = require('./models');


// create an issue...[OK]
router.post('/add', async (req, res) => {

    let issue = new Issue({title: req.body.title, responsible: req.body.responsible, description: req.body.description, severity: req.body.severity, status: req.body.status});
    try {
        let data = await issue.save();
        res.status(201).send(data);
    } catch (e) {
        res.status(500).send(e, 'Failed to create issue!');
    }
});


// route to get all issues...[OK]
router.get('/', async (req, res) => {
    try {
        let issues = await Issue.find();
        res.send(issues);
    } catch (e) {
        res.status(500).send(e, 'Failed to retrieve issues from the database!');
    }
});


// route to get an issue by it's ID...[OK]
router.get('/:id', async (req, res) => {
    try {
        let issue = await Issue.findById(req.params.id);
        res.send(issue);
    } catch (e) {
        res.status(500).send(e, 'Failed to retrieve issue from the database!');
    }
});


// update route...[OK]
router.put('/update/:id', async (req, res) => {
    try {
        await Issue.findByIdAndUpdate(req.params.id, {title: req.body.title, responsible: req.body.responsible, description: req.body.description, severity: req.body.severity, status: req.body.status});
        res.send('issue has been successfully updated!');
    } catch (e) {
        res.status(500).send(e, 'Failed to update issue!');
    }
});


// delete route...[OK]
router.delete('/delete/:id', async (req, res) => {
    try {
        await Issue.findByIdAndRemove(req.params.id);
        res.status(200).send('Successfully deleted issue from the database!');
    } catch (e) {
        res.status(500).send(e, 'Failed to delete issue from the database!');
    }
});


module.exports = router;