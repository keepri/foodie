/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
	async redirects() {
		return [];
	},
	images: {
		domains: ['firebasestorage.googleapis.com'],
	},
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};
