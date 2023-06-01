const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/all-products', (req, res, next) => {
    res.send([
        {
          "id": 782330,
          "title": "Doom: Eternal",
          "publisher": "Bethesda",
          "genre": "FPS",
          "MSRP": 39.99
        },
        {
          "id": 546560,
          "title": "Half-Life: Alyx",
          "publisher": "Valve",
          "genre": "VR",
          "MSRP": 59.99
        },
        {
          "id": 1145360,
          "title": "Hades",
          "publisher": "Supergiant",
          "genre": "Rogue-like",
          "MSRP": 24.99
        },
        {
          "id": 2050650,
          "title": "Resident Evil 4",
          "publisher": "Capcom",
          "genre": "Horror",
          "MSRP": 59.99
        },
        {
          "id": 2208920,
          "title": "Assassins Creed: Valhalla",
          "publisher": "Ubisoft",
          "genre": "Third Person",
          "MSRP": 59.99
        }
     ])
})

module.exports = router;
