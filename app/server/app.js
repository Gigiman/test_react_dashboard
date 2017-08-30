import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';

const MongoStore = require('connect-mongo')(session);
const app = express();


const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

// Connect to MongoDB with mongoose module
mongoose.connect('mongodb://localhost/testForAuth');
const db = mongoose.connection;

// Handle mongooose errors
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Connected to DB successfully');
})

// Use session for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// Parse incoming requests
app.use(publicPath);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use routes
import routes from './routes';
app.use('/', routes);

// Catch 404 error
app.use((req, res, next) => {
  let err = new Error('File not found');
  err.status = 404;
  next(err);
});

// Error handler
// Define as the last app.use callback
app.use((req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});


export default app;
