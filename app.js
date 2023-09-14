const express = require('express') 
const app = express()

const cors = require('cors');
const morgan = require('morgan'); // 디버깅
const helmet = require('helmet'); // 보안
var engines = require('consolidate');
var path = require('path');
var logger = require('morgan');

// router 설정
var indexRouter = require('./routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
app.set('views', __dirname + '/views');

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


const port = 5001 

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 

module.exports = app;