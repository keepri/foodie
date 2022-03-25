/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { default as NextHead } from 'next/head';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { useAppActions, useAuthActions } from '#redux/actions';
import { ReduxState } from '#declarations/types/Redux';

import { subscribeOnAuthChange } from '#controllers/subscribeOnAuthChange';

import { DESCRIPTION, KEYWORDS, OG_DESCRIPTION, OG_TITLE, TITLE } from '#declarations/enums/Head';
import { baseUrl, siteName } from 'utils/misc';

interface Props {
	keywords?: KEYWORDS;
	title?: TITLE;
	desc?: DESCRIPTION;
	ogTitle?: OG_TITLE;
	ogDesc?: OG_DESCRIPTION;
	previewImage?: string;
}

const Head: React.FC<Props> = ({
	keywords = KEYWORDS.HOME,
	title = TITLE.HOME,
	desc = DESCRIPTION.HOME,
	ogTitle = OG_TITLE.HOME,
	ogDesc = OG_DESCRIPTION.HOME,
	previewImage,
}) => {
	const { pathname, locale } = useRouter();
	const url = `${baseUrl}${pathname}`;

	const { loginUserAuth } = useAuthActions();
	const { setOnAuthChangeSubApp } = useAppActions();
	const unsubscribeOnAuthChange = useSelector(({ app }: ReduxState) => app.unsubscribeOnAuthChange);

	React.useEffect(() => {
		subscribeOnAuthChange({ loginUserAuth, setOnAuthChangeSubApp });

		return unsubscribeOnAuthChange && unsubscribeOnAuthChange();
	}, []);

	return (
		<NextHead>
			<title>
				{siteName} | {title}
			</title>
			<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
			<meta name='keywords' content={keywords} />
			<meta name='description' content={desc} />
			<meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />

			{/* OG METADATA */}
			<meta property='og:title' content={ogTitle} key='ogtitle' />
			<meta property='og:type' content='website' key='ogtype' />
			<meta property='og:image' content={previewImage ?? '/images/preview.jpeg'} key='ogimage' />
			<meta property='og:url' content={url} key='ogurl' />
			<meta property='og:locale' content={locale ?? 'ro_RO'} key='oglocale' />
			<meta property='og:description' content={ogDesc} key='ogdesc' />
			<meta property='og:site_name' content={siteName} key='ogsitename' />
		</NextHead>
	);
};

export default Head;
