/** @type {import('next').NextConfig} */
const { relative, join } = require('path');

module.exports = {
	distDir: `${relative(process.cwd(), __dirname)}.next`,
	cssModules: true,
	async redirects() {
		return [];
	},
	images: {
		domains: ['firebasestorage.googleapis.com'],
	},
	reactStrictMode: true,
	sassOptions: {
		includePaths: [join(__dirname, 'styles')],
	},
};
