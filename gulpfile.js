//导入需要的插件
var _gulp = require("gulp");
var _gulpHtml = require("gulp-htmlmin");
var _gulpCss = require("gulp-minify-css");
var _gulpJs = require("gulp-uglify");
var _gulpImages = require("gulp-imagemin");

//创建任务
_gulp.task("htmlmin",function(){
	_gulp.src("./index.html")
	.pipe(_gulpHtml())
	.pipe(_gulp.dest("./disk/html/"))
})
