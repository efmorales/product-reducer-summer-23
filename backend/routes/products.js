const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/all-products', (req, res, next) => {
    res.send([
        {
          "id": uuidv4(),
          "title": "Doom: Eternal",
          "publisher": "Bethesda",
          "genre": "FPS",
          "price": 39.99
        },
        {
          "id": uuidv4(),
          "title": "Half-Life: Alyx",
          "publisher": "Valve",
          "genre": "VR",
          "price": 59.99
        },
        {
          "id": uuidv4(),
          "title": "Hades",
          "publisher": "Supergiant",
          "genre": "Rogue-like",
          "price": 24.99
        },
        {
          "id": uuidv4(),
          "title": "Resident Evil 4",
          "publisher": "Capcom",
          "genre": "Horror",
          "price": 59.99
        },
        {
          "id": uuidv4(),
          "title": "Assassins Creed: Valhalla",
          "publisher": "Ubisoft",
          "genre": "Third Person",
          "price": 59.99
        }
     ])
})

module.exports = router;
