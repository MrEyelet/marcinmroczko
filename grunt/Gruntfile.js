module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		  sass: {                              // Task
		    dist: {                            // Target
		      options: {                       // Target options
		        style: 'expanded'
		      },
		      files: {                         // Dictionary of files
		        '../css/about-section-css/style.css':'../css/about-section-css/style.sass',
				// '../css/flex-grid/style.css':'../css/flex-grid/style.sass',
				'../css/general-css/style.css':'../css/general-css/style.sass',
				'../css/header-css/style.css':'../css/header-css/style.sass',
				'../css/js-classes/style.css':'../css/js-classes/style.sass',
				'../css/partials-css/style.css':'../css/partials-css/style.sass',
				// '../css/preloader-css/style.css':'../css/preloader-css/style.sass',
				'../css/skills-section-css/style.css':'../css/skills-section-css/style.sass',
				// '../css/swiper-css/style.css':'../css/swiper-css/style.sass'
		      }
		    }
		  },
		// cssmin: {
		// 	dist:{
		// 		files: {
		// 		// '../css/about-section-css/style.min.css':'../css/about-section-css/style.css',
		// 		// '../css/flex-grid/style.min.css':'../css/flex-grid/style.css',
		// 		// '../css/general-css/style.min.css':'../css/general-css/style.css',
		// 		// '../css/header-css/style.min.css':'../css/header-css/style.css',
		// 		// '../css/js-classes/style.min.css':'../css/js-classes/style.css',
		// 		// '../css/partials-css/style.min.css':'../css/partials-css/style.css',
		// 		// '../css/preloader-css/style.min.css':'../css/preloader-css/style.css',
		// 		// '../css/skills-section-css/style.min.css':'../css/skills-section-css/style.css',
		// 		// '../css/swiper-css/style.min.css':'../css/swiper-css/style.css'
		// 		'../css/dist/style.min.css':'../css/dist/built.css'
		// 		}
		// 	}
		// },
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: '../css/dist',
		      src: ['*.css', '!*.min.css'],
		      dest: '../css/dist',
		      ext: '.min.css'
		    }]
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
		},
		concat: {
		    options: {
		      separator: ' ',
		    },
		    dist: {
		      src: ['../css/preloader-css/style.css', '../css/reset-css/style.css', '../css/flex-grid/style.css',
		      '../css/general-css/style.css', '../css/header-css/style.css', '../css/about-section-css/style.css',
		      '../css/skills-section-css/style.css', '../css/swiper-css/style.css','../css/js-classes/style.css'],
		      dest: '../css/dist/built.css',
		    },
		 },
		 autoprefixer:{
		 	options: {
		        browsers: ['last 8 versions']
		    },
		    dist:{
		        files:{
		          '../css/dist/built.css':'../css/dist/built.css',
		        }
		    }
		},
		watch: {
			scripts: {
				files: '../css/**/*.sass',
				tasks: ['sass', 'concat', 'autoprefixer', 'cssmin', 'uglify'],
				options: {
					spawn:false,
					event:['all']
				},
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['sass', 'concat', 'autoprefixer', 'cssmin', 'uglify']);
}