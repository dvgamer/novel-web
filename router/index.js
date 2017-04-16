"use strict";
const express = require('express');
const router = express.Router();
const mongoose 	= require('mongoose');
const request = require('request-promise');
const MONGODB = process.env.MONGODB;

const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

mongoose.connect(`mongodb://${MONGODB?MONGODB:'127.0.0.1:27017'}/db_touno`);
mongoose.Promise = global.Promise;

router.get('/search', (req, res) => {
  request({
    url: 'https://www.xn--12c1c1aaf8feo.com/search/box',
    method: 'post',
    headers: {
    	'Host': 'www.xn--12c1c1aaf8feo.com',
      'Accept': 'text/html, */*; q=0.01',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      q: '9789742361556',
      ajaxxxx: true,
      ajaxxxx_dataType: 'html'
    }
  }).then(res => {
  	res.end(JSON.stringify({ hrml: res }))
  }).catch(err => {
  	console.log('err', err)
  	res.end()
  })
})

module.exports = router;