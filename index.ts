import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true })) 
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World from GET !!');
});
/* Path Variables */
app.get('/hello/:nm', (req, res) => {
    res.send('Hello with ' + req.params.nm );
});
app.get('/add/:n1/:n2', (req, res) => {
    let sum = +req.params.n1 + +req.params.n2;
    res.send('Hello with ' + sum );
});
/* Query Params */
app.get('/hello', (req, res) => {
    res.send('GET Hello with queryparam ' + req.query.username);
});
app.post('/hello', (req, res) => {
    let empno = req.body.empno
    let ename = req.body.ename
    
    res.send('POST Hello with body params ' + empno + "," + ename);
});

app.post('/', (req, res) => {
    res.send('Hello World from POST !!');
});
app.put('/', (req, res) => {
    res.send('Hello World from PUT !!');
});
app.delete('/', (req, res) => {
    res.send('Hello World from DELETE !!');
});
app.get('/*', (req, res) => {
    res.send('Catchall.. 404 !!');
});
app.listen(3000, err => {
    if (err) {
        return console.error(err);
    }
    return console.log('server is listening on 3000');
});

