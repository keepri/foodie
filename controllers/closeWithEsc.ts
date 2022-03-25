/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';

export { closeWithEsc };

/** add functionality to close by pressing escape key */
const closeWithEsc = (handleClose: Function) => {
	React.useEffect(() => {
		document.onkeyup =
			typeof window !== 'undefined' ? e => e.code === 'Escape' && (handleClose(), console.log(e.code)) : null;

		return () => {
			document.onkeyup = null;
		};
	}, []);
};
