const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const http = require('http').createServer(app);
// const io = require('socket.io')(http);
const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});


const logger = require('./services/logger.service');

const port = process.env.PORT || 1337;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'Webcrafts secret is CASEP 2020',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:1337', 'http://localhost:1337'],
        credentials: true
    };
    app.use(cors(corsOptions));
};

const authRoutes = require('./api/auth/auth.routes');
const userRoutes = require('./api/user/user.routes');
const wapRoutes = require('./api/wap/wap.routes');
const connectSockets = require('./api/socket/socket.routes')
const sampleRoutes = require('./api/sample/sample.routes');

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/wap', wapRoutes);
app.use('/api/sample', sampleRoutes);

connectSockets(io)

// app.get('/**', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

app.get('/', (req, res) => {
    res.send(`<h2>NODEMON MUST DIE!</h2>`);
})

http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
});


























// var logger = require('morgan');

// if (process.env.NODE_ENV === 'development') {

// app.use(logger('common', {
//     stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// }));
// app.use(logger('dev'));
// }