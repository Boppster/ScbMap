// import { createReadStream } from 'fs';
const Koa = require('koa');
const app = new Koa();
var fs = require('fs');

var readFileThunk = function(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

function handle1(ctx, next) {
    ctx.type = 'html';
    ctx.body =  fs.createReadStream('index.html');
}

app.use(async ctx => {
  ctx.type = 'html';
  ctx.body =  fs.createReadStream('index.html');
});

app.listen(3000);
// app.use(router.get('/', function *(){
//   this.body = handle1;
// }));
