const express = require('express')
const React = require('react')

// const renderToString = require('RerenderToString')

const renderToString = require('react-dom/server').renderToString
const Home = require('./components/Home').default
const app = express()


app.get('/', (req, res) => {
    const content = renderToString(<Home />)
    //buildaa htmlskeleton react appista appista

    res.send(content)
})

app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})