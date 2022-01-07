import React from 'react';
import type { NextPage } from 'next';

import { useSelector } from 'react-redux';
import { ReduxState } from '#declarations/types/Redux';

interface Props {}

const Index: NextPage<Props> = ({}) => {
	const {
		auth: { user },
	} = useSelector(({ auth }: ReduxState) => ({ auth }));

	return (
		<main>
			<h1>Hello{`, ${user.name}`}</h1>
		</main>
	);
};

export default Index;
