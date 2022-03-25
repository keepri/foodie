/** @type {import('next').NextConfig} */
const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
	withSass({
		cssModules: true,
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
	}),
);
