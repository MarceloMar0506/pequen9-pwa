module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,js,png,mp3,ttf,ini,json,gif,jpg,bmp}'
	],
	swDest: 'sw.js',
        maximumFileSizeToCacheInBytes: 5000000,
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};