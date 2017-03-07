module.exports = {
  entry: ["./app.js"],
  output: {
    filename: "bundle.js"
  },
  watch: true,
 module: {
   rules: [
     {
       test: [/\.js/, /\.es6$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015'] 
       }
     },
	{
		test: [/\.js/],
		exclude: /node_modules/,
		loader: "jshint-loader",
		enforce: 'post'
	}
   ]
 },
 resolve: {
   extensions: ['.js', '.es6']
 },
}

