const express =  require('express');
const router = express.Router();

//Get all the auctions
router.get('/', (req, res) => res.send('auction router'));

//create auction
router.post('/', (req, res) => {

})

//place bid 
router.post('/place-bid', (req, res) => {

})

//cancel auction
router.post('/cancel-aucion', (req, res) => {

})

//finalize auction
router.post('/finalize-auction', (req, res) => {
    res.send('finalize auction')
})

module.exports = router;