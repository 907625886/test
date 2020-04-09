const path = require('path'); //node内置核心模块，用来设置路径。
module.exports = {
  entry: path.join(__dirname,'./src/js/main.js'),   // 入口文件
  output: {                     // 输出配置
    filename: 'bundle.js',      // 输出文件名
    path: path.join(__dirname,'./dist'),   //输出文件路径配置
  },

};