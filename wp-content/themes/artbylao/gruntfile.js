// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

  // all of our configuration will go here

  // configure uglify to minify js files -------------------------------------
  uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
       target: {
        files: [{
          expand: true,
          cwd: 'js/',
          src: ['*.js'],
          dest: 'js/min/',
          ext: '.min.js'
        }]
      }
    },
  // configure cssmin to minify css files -------------------------------------
  cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css/',
          src: ['main-style.css'],
          dest: 'assets/css/'
        }]
      }
    },
   // configure imgmin to minify image files -------------------------------------
  imagemin: {
  		options: {
        optimizationLevel: 5
      },
      target: {
        files: [{
          expand: true,
          cwd: 'wp-content/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'wp-content_src/'
        }]
      }
    },
    less: {
     development: {
       options: {
         compress: true,
         yuicompress: true,
         optimization: 2
       },
       files: {
         "assets/css/main-less.css": "assets/less/main.less"
       }
     }
    },
  browserSync: {
    dev: {
       bsFiles: {
           src : [
               'app/css/*.css',
               'app/*.html'
           ]
       },
       options: {
           watchTask: true,
           server: './app'
       }
    }
  },
  // what for css and js files to perform minimizing--------------------------------------
    watch: {
    scripts: {
      files: ['**/*.js','css/*.css', 'less/**/*.less'],
      tasks: ['default'],
      options: {
        spawn: false,
      },
    },
  },
  // file contacenation --------------------------------------------------------
  concat: {
    options: {
      separator: '/*= Concat =*/',
    },
   dist: {
     src: ['../dazzling/inc/css/bootstrap.min.css','../dazzling/inc/css/font-awesome.min.css','../dazzling/style.css', 'assets/css/main-less.css'],
     dest: 'assets/css/main-style.css',
   }
  }
});
    grunt.registerTask('default', ['less','concat','cssmin','uglify','watch']);
    grunt.registerTask('watch',['watch']);
    grunt.registerTask('build',['less','concat','cssmin','uglify']);
    grunt.registerTask('min',['cssmin']);
  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these

  //minification packages
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  //Browsersync
  grunt.loadNpmTasks('grunt-browser-sync');

  //File change and respond package
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  // Concatenation package
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less')

};
