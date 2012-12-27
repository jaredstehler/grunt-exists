module.exports = function(grunt) {
  
  // Nodejs libs.
  var fs = require('fs');
  var path = require('path');
  // In Nodejs 0.8.0, existsSync moved from path -> fs.
  var existsSync = fs.existsSync || path.existsSync;

  
  grunt.registerTask('exists', 'File Existence', function() {
    var files = grunt.config('exists.files'); 
  
    grunt.utils._.each(this.data, function(file){
      if(!existsSync(file)){
        grunt.fatal("Required file [" + file + "] doesn't exist.");
	  }
	});
  });
};

