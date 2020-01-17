var express = require("express");
var Mock = require("mockjs");
var app = express();
var bodyParser = require('body-parser');
// var data = require('./searchlist');

app.use(bodyParser.json());  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

var router = express.Router();
app.use("/api", router);
app.get('/', function (req, res) {
  res.send('hello world');
});

router.use("/list", function (req, res) {
  var Random = Mock.Random;
  //调用mock方法模拟数据
  var data = { list: [] };
  for (var i = 0; i < 20; i++) {
    var temp = {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|2000-3000': 2222,
      'title': Random.title(),
      'slug': Random.id(),
      'list_image_url': 'http://lorempixel.com/200/100/people/',//Random.image('200x100', '#4A7BF7', 'Hello'),
      'public_abbr': Random.sentence(3, 5),
      'commentable': true,
      'important_collection': null,
      "user": {
        "id|1-5000000": 1839401,
        "nickname": Random.cname(),
        "slug": Random.id(),
        "avatar": Random.image('100x100')
      },
    };
    data.list.push(Mock.mock(temp));
  }
  return res.json(data);
});
app.listen(3001);