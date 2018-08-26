module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			css: {
				src: '../css/flex-grid/style.css',
				dest: '../css/flex-grid/style.min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
}