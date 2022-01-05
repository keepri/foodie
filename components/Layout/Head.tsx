import React from 'react';
import { default as NextHead } from 'next/head';

import { DESCRIPTION, KEYWORDS, TITLE } from '#declarations/enums/Head';

interface Props {
	keywords?: string;
	title?: string;
	description?: string;
}

const Head: React.FC<Props> = ({
	keywords = KEYWORDS.HOME,
	title = TITLE.HOME,
	description = DESCRIPTION.BASE,
}) => {
	return (
		<NextHead>
			<title>{title}</title>
			<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
			<meta name='keywords' content={keywords} />
			<meta name='description' content={description} />
			<meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
		</NextHead>
	);
};

export default Head;
