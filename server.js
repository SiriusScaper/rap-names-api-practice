const express = require('express');
const app = express()
const PORT = 8000;

const rappers = {
  "21 Savage": {
  "age": 29,
  "birthName": 'Shéyaa Bin Abraham-Joseph',
  "birthLocation": 'London, England'
  },
  "Chance the Rapper": {
    "age": 29,
    "birthName": 'Chancelor Bennett',
    "birthLocation": 'Chicago, Illinois'
  },
  "unkonwn": {
    "age": 0,
    "birthName": 'unknown',
    "birthLocation": 'unknown'
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/api/:name', (req, res) => {
  const rapperName = req.params.name.toLowerCase();
  if(rappers[rapperName]){
    res.json(rappers[rapperName])
  }else {
    res.json(rappers['unknown'])
  }
});

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`)
})

