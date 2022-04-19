/** @type {import('next').NextConfig} */
const { relative, join } = require('path');

module.exports = {
	distDir: `${relative(process.cwd(), __dirname)}.next`,
	reactStrictMode: true,
	cssModules: true,
	i18n: {
		locales: ['en-US', 'ro-RO'],
		defaultLocale: 'en-US',
	},
	images: {
		domains: ['firebasestorage.googleapis.com'],
	},
	sassOptions: {
		includePaths: [join(__dirname, 'styles')],
	},
	async redirects() {
		return [
			{
				source: '/settings/[[...settingsRoute]]',
				destination: '/login',
				permanent: true,
			},
		];
	},
};
