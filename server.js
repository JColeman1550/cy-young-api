const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 7000

app.use(cors())

const pitchers = {
    'gerrit cole': {
        'leagueName': 'American',
        'positionName': 'SP',
        'positionName': 'NYY',
        'awardYear': 2023
    },
    'blake snell':{
        'leagueName': ['National', 'American'],
        'positionName': 'SP',
        'teamName': ['SDP', 'TBR'],
        'awardYear': [2023, 2018]
    },
    'justin verlander':{
        'leagueName': 'American',
        'positionName': 'SP',
        'teamName': 'HOU',
        'awardYear': [2022,2019]
    },
    'sandy alcantara':{
        'leagueName': 'National',
        'positionName': 'SP',
        'teamName': 'MIA',
        'awardYear': 2022
    },
    'robbie ray':{
        'leagueName': 'American',
        'positionName': 'SP',
        'teamName': 'TOR',
        'awardYear': 2021
    },
    'corbin burnes':{
        'leagueName': 'National',
        'positionName': 'SP',
        'teamName': 'MIL',
        'awardYear': 2021
    },
    'shane bieber':{
        'leagueName': 'American',
        'positionName': 'SP',
        'teamName': 'CLE',
        'awardYear': 2020
    },
    'trevor bauer':{
        'leagueName': "National",
        'positionName': 'SP',
        'teamName': 'CIN',
        'awardYear': 2020
    },
    'jacob degrom':{
        'leagueName': 'National',
        'positionName': 'SP',
        'teamName': 'NYM',
        'awardYear': [2019,2018]
    },
   
    'corey kluber':{
        'leagueName': 'American',
        'positionName': 'SP',
        'teamName': 'CLE',
        'awardYear': 2017
    },
    'max scherzer':{
        'leagueName': 'National',
        'positionName': 'SP',
        'teamName': 'WSN',
        'awardYear': [2017,2016]
    },
    'rick porcello':{
        'leagueName': 'American',
        'positionName': 'SP',
        'teamName': 'BOS',
        'awardYear': 2016
    },
    
    'dallas keuchel':{
        'leagueName': 'American',
        'positionName': 'SP',
        'teamName': 'HOU',
        'awardYear': 2015
    },
    'jake arrieta':{
        'leagueName': 'National',
        'positionName': 'SP',
        'teamName': 'CHC',
        'awardYear': 2015
    },

    'unknown':{
        'leagueName': 'unknown',
        'positionName': 'unknown',
        'teamName': 'unknown',
        'awardYear': 'unknown'
    }

}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:name',(request,response)=>{
    const pitcherName = request.params.name.toLowerCase()

    if( pitchers[pitcherName] ){
        response.json(pitchers[pitcherName])
    }else{
        response.json(pitchers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})

