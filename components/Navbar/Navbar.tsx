import Link from '#components/Buttons/Link';
import React from 'react';
import { useSelector } from 'react-redux';
import { URLS } from 'utils/misc';
import { ReduxState } from '#declarations/types/Redux';
import Button from '#components/Buttons/Button';
import { useAuthActions } from '#redux/actions';

interface Props {}

const Navbar: React.FC<Props> = ({}) => {
	const {
		auth: { isLogged },
	} = useSelector(({ auth }: ReduxState) => ({ auth }));
	const { logoutUserAuth } = useAuthActions();

	return (
		<nav>
			<ul>
				<Link button secondary href={URLS.CART}>
					CART
				</Link>
				{isLogged && (
					<Button secondary onMouseUp={() => logoutUserAuth()}>
						LOGOUT
					</Button>
				)}
				{!isLogged && (
					<>
						<Link button secondary href={URLS.LOGIN}>
							LOGIN
						</Link>
						<Link button secondary href={URLS.REGISTER}>
							REGISTER
						</Link>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
