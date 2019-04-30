const express = require('express')

const Router = express.Router()

// Chat.remove({},function(e,d){
	
// })


Router.get('/', (req, res, next) => {
    axios.get('http://172.16.68.161:8888/api/zjp')
        .then(res1 => {
            res.send(res1.data);
        }).catch(e => {
            config.sendError(res, e);
    })
})
module.exports = Router