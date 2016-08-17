 var fs = require('fs');
 var join = require('path').join;
 console.log('__dirname:' + __dirname);
 var path = join(__dirname, '/restfulApi.ejs');
 console.log('__dirname:' + __dirname);
 console.log('path:' + path);

 exports.writeFile = function(filename, data) {
   // function writeFile(file) {
   // 测试用的中文
//   var str = "\r\n我是一个人Hello myself!";
   // 把中文转换成字节数组
//   var arr = iconv.encode(str, 'gbk');
//   console.log(arr);

   // appendFile，如果文件不存在，会自动创建新文件
   // 如果用writeFile，那么会删除旧文件，直接写新文件
   fs.writeFile(filename, data, function(err) {
     if (err)
       console.log("fail " + err);
     else
       console.log("写入文件ok");
   });
 };
 /*
  function openAndWriteToSystemLog(writeBuffer, callback) {
    fs.open('./my_file', 'a', function(err, fd) {
      if (err) {
        return callback(err);
      }

      function notifyError(err) {
        fs.close(fd, function() {
          callback(err);
        });
      }
      var bufferOffset = 0,
        bufferLength = writeBuffer.length,
        filePosition = null;
      fs.write(fd, writeBuffer, bufferOffset, bufferLength, filePosition, function(err, written) {
        if (err) {
          return notifyError(err);
        }
        fs.close(fd, function() {
          callback(err);
        });
      });
    });
  };

  openAndWriteToSystemLog(new Buffer('writing this string'), function(err) {
    if (err) {
      console.log("error while opening and writing:", err.message);
      return;
    }
    console.log('All done with no errors');
  });
 */
