var gulp=require(gulp),
	uglify=require(gulp-uglify);
	
gulp.task("_uglify",function(){
	gulp.src("js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});
