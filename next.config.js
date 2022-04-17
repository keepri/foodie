/** @type {import('next').NextConfig} */
const { relative, join } = require('path');

module.exports = {
	distDir: `${relative(process.cwd(), __dirname)}.next`,
	cssModules: true,
	async redirects() {
		return [
			{
				source: '/settings/[[...settingsRoute]]',
				destination: '/login',
				permanent: true,
			},
		];
	},
	images: {
		domains: ['firebasestorage.googleapis.com'],
	},
	reactStrictMode: true,
	sassOptions: {
		includePaths: [join(__dirname, 'styles')],
	},
};
