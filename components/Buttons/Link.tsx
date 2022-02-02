import React from 'react';
import { default as NextLink, LinkProps } from 'next/link';

import styles from './Button.module.scss';

type LinkRefType = React.ForwardedRef<HTMLAnchorElement>;

interface Props extends LinkProps {
	button?: boolean;
	underline?: boolean;
	className?: string;
	fullWidth?: boolean;
	primary?: boolean;
	secondary?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, React.PropsWithChildren<Props>>(
	({ children, underline, fullWidth, className, button, primary, secondary, href, ...rest }, ref) => {
		return (
			<NextLink href={href} passHref>
				<a
					ref={ref as LinkRefType}
					style={{ textDecoration: underline ? 'underline' : 'none' }}
					className={[
						button && styles['button'],
						fullWidth && 'full-width',
						primary && styles['button-primary'],
						secondary && styles['button-secondary'],
						className,
					].join(' ')}
					{...rest}
				>
					{children}
				</a>
			</NextLink>
		);
	},
);

export default Link;
