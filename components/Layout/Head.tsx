import React from 'react';
import { default as NextHead } from 'next/head';
import { useRouter } from 'next/router';

import { DESCRIPTION, KEYWORDS, OG_DESCRIPTION, OG_TITLE, TITLE } from '#declarations/enums/Head';
import { siteName } from '#utils/misc';
import { Langs } from '#declarations/enums/Langs';
import { useAppActions } from '#redux/actions';

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
	const url = typeof location !== 'undefined' && location.href;
	const { locale } = useRouter();
	const { setLangApp } = useAppActions();

	React.useEffect(() => {
		if (locale !== Langs.en) {
			switch (locale) {
				case Langs.ro: {
					setLangApp(Langs.ro);
					break;
				}
				default: {
					break;
				}
			}
		}
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
			<meta property='og:image' content={previewImage ?? '/preview-jpeg.jpeg'} key='ogimage' />
			{url && <meta property='og:url' content={url} key='ogurl' />}
			<meta property='og:locale' content={locale ?? 'ro_RO'} key='oglocale' />
			<meta property='og:description' content={ogDesc} key='ogdesc' />
			<meta property='og:site_name' content={siteName} key='ogsitename' />
		</NextHead>
	);
};

export default Head;
