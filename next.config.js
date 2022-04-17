/** @type {import('next').NextConfig} */
const { URLS } = require('#utils/misc');
const { relative, join } = require('path');

module.exports = {
	distDir: `${relative(process.cwd(), __dirname)}.next`,
	cssModules: true,
	async redirects() {
		return [
			{
				source: '[[...settingsRoute]]',
				destination: URLS.LOGIN,
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
