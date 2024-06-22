const express = require('express');
const router = express.Router();
const Person = require("../model/Person");

// Define routes for /person
router.get("/", async(req, res) => {
    try {
        const presons = await Person.find()
        res.json(presons)
    } catch (error) {
        console.error("Error fetching persone:", error);
        res.status(500).json({ error: "Internal server error" })
    }

});

router.post("/", async(req, res) => {
    try {
        const data = req.body
        const newPerson = new Person(data)

        const response = await newPerson.save();
        console.log("data saved")
        res.status(200).json(response)


    } catch (err) {
        console.log(err);
        res.status(500).josn({ error: "Internal Server Error" })
    }
});
router.get('/:workType', async(req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log('response fetched');
            res.status(200).json(response)
        } else {
            res.status(404).json({ error: 'Invelid work type' });
        }


    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'error:Internal Server Error' })

    }
});

router.put("/:id", (req, res) => {
    try {
        const personId = req.params.id;
        const updatePersonData = req.body;

        const updatedPerson = Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true,
            runValidators: true
        })
        if (!updatedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.json(updatedPerson);
    } catch (error) {
        console.error('Error updating person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

})
router.delete('/:id', async(req, res) => {
    try {
        const personId = req.params.id; // Extract the person's ID from the URL parameter

        // Assuming you have a Person model
        const deletedPerson = await Person.findByIdAndRemove(personId);

        if (!deletedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }

        // Send a success message as a JSON response
        res.json({ message: 'Person deleted successfully' });
    } catch (error) {
        console.error('Error deleting person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;