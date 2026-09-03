module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,js,png,mp3,ttf,ini,json,gif,jpg,bmp}'
	],
	swSrc: 'sw-src.js',
	swDest: 'sw.js',
	maximumFileSizeToCacheInBytes: 5000000
};