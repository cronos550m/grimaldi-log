const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const DATA_PATH = path.join(__dirname,'data.json');

app.get('/api/data', (req,res)=>{
  if(fs.existsSync(DATA_PATH)){
    const d = JSON.parse(fs.readFileSync(DATA_PATH));
    res.json(d);
  } else {
    res.status(404).json({error:'data not found'})
  }
});

app.post('/api/data', (req,res)=>{
  try{
    fs.writeFileSync(DATA_PATH, JSON.stringify(req.body,null,2));
    res.json({ok:true});
  } catch(e){
    res.status(500).json({error:e.message});
  }
});

app.listen(4000, ()=>console.log('Server listening on port 4000'));