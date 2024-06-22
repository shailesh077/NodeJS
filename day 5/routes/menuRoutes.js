const express = require('express');
const router = express.Router();
const Menu = require("../model/Menu")

// Define routes for /person
router.get('/', async(req, res) => {
    try {
        const menuItem = await Menu.find()
        res.json(menuItem)
    } catch (error) {
        console.error("Error fetching persone:", error);
        res.status(500).json({ error: "Internal server error" })
    }
});

router.post('/', async(req, res) => {
    try {
        const data = req.body
        const newMenu = new Menu(data)

        const response = await newMenu.save()
        console.log('data save')
        res.status(200).json(response)



    } catch (err) {
        console.log(err);
        res.status(500).josn({ error: "Internal Server Error" })

    }
});
router.get('/:tasteType', async(req, res) => {
    try {
        const tasteType = req.params.tasteType;
        if (tasteType == 'Sweet' || tasteType == 'Spicy' || tasteType == 'Sour') {
            const response = await Menu.find({ taste: tasteType });
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

module.exports = router;