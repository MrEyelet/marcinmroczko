module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			dist:{
				files: {
				'../css/about-section-css/style.min.css':'../css/about-section-css/style.css',
				'../css/flex-grid/style.min.css':'../css/flex-grid/style.css',
				'../css/general-css/style.min.css':'../css/general-css/style.css',
				'../css/header-css/style.min.css':'../css/header-css/style.css',
				'../css/js-classes/style.min.css':'../css/js-classes/style.css',
				'../css/partials-css/style.min.css':'../css/partials-css/style.css',
				'../css/preloader-css/style.min.css':'../css/preloader-css/style.css',
				'../css/skills-section-css/style.min.css':'../css/skills-section-css/style.css',
				'../css/swiper-css/style.min.css':'../css/swiper-css/style.css'
				}
			}
		},
		uglify: {
			options: {
				manage: false
			},
			dist:{
				files: {
				'../js/preloader.min.js':'../js/preloader.js',
				'../js/appear-plugin.min.js':'../js/appear-plugin.js',
				'../js/main-functions.min.js':'../js/main-functions.js',
				'../js/mobile-scripts.min.js':'../js/mobile-scripts.js',
				'../js/swiper.min.js':'../js/swiper.js'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['cssmin', 'uglify']);
}