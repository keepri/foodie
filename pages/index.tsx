import React from 'react';
import type { NextPage } from 'next';
import Button from '#components/Buttons/Button';
import Link from '#components/Buttons/Link';

interface Props {}

const HomePage: NextPage<Props> = ({}) => {
	return (
		<div>
			<Button secondary>Hello</Button>
			<Link href='#'>Hello Link</Link>
		</div>
	);
};

export default HomePage;
