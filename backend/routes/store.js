const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

router.get('/products', (req, res, next) => {
    res.send([
        {
            "id": uuidv4(),
            "gameTitle": "Doom: Eternal",
            "publisherName": "Bethesda",
            "gameStudio": "id Software",
            "genre": "FPS",
            "MSRP": 39.99
        },
        {
            "id": uuidv4(),
            "gameTitle": "Half-Life: Alyx",
            "publisherName": "Valve",
            "gameStudio": "Valve",
            "genre": "VR",
            "MSRP": 59.99
        },
        {
            "id": uuidv4(),
            "gameTitle": "Hades",
            "publisherName": "Supergiant",
            "gameStudio": "Supergiant",
            "genre": "Rogue-like",
            "MSRP": 24.99
        },
        {
            "id": uuidv4(),
            "gameTitle": "Resident Evil 4",
            "publisherName": "Capcom",
            "gameStudio": "Capcom",
            "genre": "Horror",
            "MSRP": 59.99
        },
        {
            "id": uuidv4(),
            "gameTitle": "Assassins Creed: Valhalla",
            "publisherName": "Ubisoft",
            "gameStudio": "Ubisoft Montreal",
            "genre": "Third Person",
            "MSRP": 59.99
        }
    ])
})


module.exports = router
