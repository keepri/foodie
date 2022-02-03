import React from 'react';
import { default as NextLink, LinkProps } from 'next/link';

import styles from './Button.module.scss';
import Tooltip from '#components/Tooltip/Tooltip';
import Badge from '#components/Badge/Badge';
import { BadgeProp } from '#declarations/types/Misc';

type LinkRefType = React.ForwardedRef<HTMLAnchorElement>;

interface Props extends LinkProps {
	button?: boolean;
	underline?: boolean;
	className?: string;
	fullWidth?: boolean;
	primary?: boolean;
	secondary?: boolean;
	tooltip?: string;
	badge?: BadgeProp;
}

const Link = React.forwardRef<HTMLAnchorElement, React.PropsWithChildren<Props>>(
	(
		{ children, tooltip, badge, underline, fullWidth, className, button, primary, secondary, href, ...rest },
		ref,
	) => {
		return (
			<NextLink href={href} passHref>
				<a
					ref={ref as LinkRefType}
					style={{ textDecoration: underline ? 'underline' : 'none' }}
					className={[
						styles['button-selector'],
						button && styles['button'],
						fullWidth && 'full-width',
						primary && styles['button-primary'],
						secondary && styles['button-secondary'],
						className,
					].join(' ')}
					{...rest}
				>
					{badge && <Badge info={badge} />}
					{children}
					{tooltip && <Tooltip className={styles['tooltip']} text={tooltip} />}
				</a>
			</NextLink>
		);
	},
);

export default Link;
