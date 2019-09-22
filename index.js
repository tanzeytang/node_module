var _ = require("underscore");
//理解一下requrie()是如何工作的，
//require的默认工作逻辑是如下的
//1.会觉得underscore是core module,会去查找
//core module里有没有underscore，没有，
//会继续觉得underscore是一个file 或folder就像我们
//的logger文件一样，它会尝试找到一个叫underscore.js的文件
//或者一个叫underscore文件夹，并在里面找一个index.js的文件
//没有找到，才会在node_module文件夹下去找对应的underscore.js
//但是不知道为何我们只能用具体路径去引入外部module？？？？
var result = _.contains([1, 2, 3], 2);
console.log(result);
