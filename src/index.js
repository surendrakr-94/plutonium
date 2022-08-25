const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup:MNDzZvlTM9rumVgq@cluster0.hnopil1.mongodb.net/surendra95-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
const moment =require('moment');
const time =moment();


app.use (
    function (req, res, next) {
        const date=moment().format('DD-MM-YYYY, HH:mm:ss');
        
        const ipAddress= req.ip;
        
        const r=req.originalUrl
        console.log (date," , ",ipAddress," , ",r);
        next();
  }
  );

app.use('/', route);




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
