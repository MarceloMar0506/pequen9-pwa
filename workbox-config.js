module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,js,png,mp3,ttf,json,gif,jpg,bmp}'
	],
	globIgnores: [
		'**/desktop.ini',
		'**/node_modules/**',
		'workbox-*.js',
		'workbox-config.js',
		'sw.js',
		'sw-src.js',
		'package.json',
		'package-lock.json'
	],
	swSrc: 'sw-src.js',
	swDest: 'sw.js',
	maximumFileSizeToCacheInBytes: 5000000
};