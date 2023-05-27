import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'newuser',
  password: '${Mz.05021996}',
  database: 'test-train-tickets',
});

app.use(cors());
app.use(express.json());

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to DB');
  }
});

app.get('/', (req, res) => {
  const sql = 'SELECT * FROM `Train Tickets`';

  db.query(sql, (error, result) => {
    if (error) {
      console.log('Error Connecting to DB');
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => console.log('Server started on port ' + port));
