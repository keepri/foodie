const { default: next } = require('next');
const { https } = require('firebase-functions');
const nextjsDistDir = require('./next.config.js').distDir;
const isDev = process.env.NODE_ENV !== 'production';

const server = next({
	dev: isDev,
	conf: {
		distDir: nextjsDistDir,
		images: {
			domains: ['firebasestorage.googleapis.com'],
		},
	},
});

const nextjsHandle = server.getRequestHandler();

exports.nextServer = https.onRequest((req, res) => server.prepare().then(() => nextjsHandle(req, res)));
