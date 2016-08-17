var ejs = require('ejs');
var read = require('fs').readFileSync;
var join = require('path').join;
console.log('__dirname:' + __dirname);
var fileName = 'restfulApi';
var path = join(__dirname, '/' + fileName + '.ejs');
console.log('__dirname:' + __dirname);
console.log('path:' + path);

var writeFile = require('./writeFile');

var data = {
  domainId: 'userId'
};

var str = 'handles';　　
var reg = 'templates';　　
var res = path.replace(str, reg);
console.log('res:' + res);

// Just one template
//var rtn = ejs.render(res, domainId);
//var rtn = ejs.renderFile(res, domainId);
//console.log('rtn:' + rtn);

var ret = ejs.compile(read(res, 'utf8'), {
  filename: res
})(data);
console.log('ret:' + ret);

var path2 = join(__dirname, '/user.js');
writeFile.writeFile(path2, ret);
