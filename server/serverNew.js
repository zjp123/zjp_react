// import {renderToString,renderToNodeStream} from 'react-dom/server'
const ReactServer = require('react-dom/server')

// import express from 'express'
const path = require('path');
const express = require('express');
const fs = require('fs')

const app = express()
const server = require('http').Server(app)


const isDev = process.env.NODE_ENV === 'development'

if (!isDev){
    //线上的环境
    const serverBuild = require('../dist/serverIndex').default
    let template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), "utf-8")

    app.use('/static/', express.static(path.join(__dirname, '../dist')))
    app.get('*', function(req, res){

        let page = ReactServer.renderToString(serverBuild)
        page = template.replace('<!-- app -->', page)
        return res.send(page)
        

    })
}else{
    //开发时的环境
    const devStatic = require('./devStatic')
    devStatic(app)
}


server.listen(9093,function(){
	console.log('Node app start at port 9093')
})




