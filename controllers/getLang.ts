/* eslint-disable react-hooks/rules-of-hooks */
import { ReduxState } from '#declarations/types/Redux';
import { useSelector } from 'react-redux';
import { Lang } from '#utils/languages';

export { getLang };

const getLang = () => {
	const appLang = useSelector(({ app: { appLang } }: ReduxState) => appLang);
	const { lang } = new Lang(appLang);

	return lang;
};
