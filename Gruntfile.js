module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			options: {
				paths: [
					'less',
					'bower_components',
				],
			},
			dist: {
				files: {
					'static/main.css': 'less/main.less',
				},
				options: {
					compress: true,
					cleancss: true,
					report: 'min',
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', [
		'less:dist',
	]);

};
