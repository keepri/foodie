import React from 'react';

import styles from './Badge.module.scss';

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
	info: string | number;
}

const Badge: React.FC<Props> = ({ className, info, ...rest }) => {
	const text = React.useMemo(() => info, [info]);

	return (
		<div className={[styles.badge, className].join(' ')} {...rest}>
			<p>{text}</p>
		</div>
	);
};

export default Badge;
