import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let weekStatus;

function checkDay(res, req, next) {
    const weekday = "It's a weekday, it's time to work hard!"
    const weekend = "It's the weekend, it's time to have fun!"
    
    const day = new Date().getDay();
    if (day === 0 || day === 6) {
        weekStatus = weekend;
    } else {
        weekStatus = weekday;
    }
    console.log(day)
    console.log(weekStatus)
    next();
}
app.use(checkDay);
 
app.get('/', (req, res) => {
    res.render('index.ejs', {
        status: weekStatus
    })
    
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});