import React from 'react';
import type { NextPage } from 'next';

interface Props {}

const HomePage: NextPage<Props> = ({}) => {
	return (
		<>
			<header>
				<nav></nav>
			</header>
			<main>
				<h1>Hello</h1>
			</main>
		</>
	);
};

export default HomePage;
