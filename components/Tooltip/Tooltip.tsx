import React from 'react';

import styles from './Tooltip.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	text: string;
}

const Tooltip: React.FC<Props> = ({ text, className, ...rest }) => {
	const tooltip = React.useMemo(() => text, [text]);

	return (
		<div className={[styles.tooltip, className].join(' ')} {...rest}>
			<p>{tooltip}</p>
		</div>
	);
};

export default Tooltip;
