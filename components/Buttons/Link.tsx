import React from 'react';
import { Url } from '#declarations/types/Various';
import Link from 'next/link';

import styles from './Button.module.scss';

type LinkRefType = React.ForwardedRef<HTMLAnchorElement>;

interface Props {
	noStyles?: boolean;
	href: Url;
	className?: string;
	primary?: boolean;
	secondary?: boolean;
}

const Button = React.forwardRef<
	HTMLAnchorElement,
	React.PropsWithChildren<Props & React.AnchorHTMLAttributes<HTMLAnchorElement>>
>(({ children, href, className, noStyles, primary, secondary, ...rest }, ref) => {
	return (
		<Link href={href} passHref>
			<a
				ref={ref as LinkRefType}
				className={[
					!noStyles && styles['button'],
					primary && styles['button-primary'],
					secondary && styles['button-secondary'],
					noStyles && styles['no-styles'],
					className,
				].join(' ')}
				{...rest}
			>
				{children}
			</a>
		</Link>
	);
});

export default Button;
