var fs = require('fs');
var session=require('express-session');

var express=require('express');
/*
module.exports=function (session){
var Store = session.Store;

function FileStore(options){
var self=this;
Store.call(self, options);
fs.mkdirSync(options.pathname,0777);

//fs.mkdirSync(options.pathname,0777);
}
return FileStore;

};
*/
exports.dir=function(pathname){
var isexit=fs.existsSync('./'+pathname);
console.log("isexit: "+isexit);
if(!isexit){
fs.mkdirSync(pathname,0777);
}
}

