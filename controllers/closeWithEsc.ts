/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { isClientSide } from '#utils/misc';

export { closeWithEsc };

/** add functionality to close by pressing escape key */
const closeWithEsc = (handleClose: Function) => {
	React.useEffect(() => {
		document.onkeyup = isClientSide ? e => e.code === 'Escape' && (handleClose(), console.log(e.code)) : null;

		return () => {
			document.onkeyup = null;
		};
	}, []);
};
