module.exports = function(grunt){


	//加载插件
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');

	//不让程序，因为语法错误而，而中断整个服务
	grunt.option('force', true);


	grunt.initConfig({
		watch: {
		  scripts: {
			files: ['client/**','server/**','common/**','!client/uploadImage/**'],
			options: {
			  livereload: true
			}
		  }
		},

		nodemon: {
			 dev: {
				  script: './server/server.js',   //指向启动的文件
				  options: {
					   args: [],
					   //nodeArgs: ['--debug'],
					   ignore: ['README.md', 'node_modules/**', '.DS_Store'],
					   ext: 'js',
					   watch: ['./'],
					   delay: 1000,
					   env: {
							PORT: '3000'
					   },
					   cwd: __dirname
				  }
			 }
		},


		concurrent: {
		  tasks: ['nodemon', 'watch'],
		  options: {
			logConcurrentOutput: true
		  }
		}
	  })



	//注册任务
	grunt.registerTask('default', ['concurrent'])
}
