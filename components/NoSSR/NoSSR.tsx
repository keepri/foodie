import dynamic from 'next/dynamic';
import React from 'react';

interface Props {}

const NoSSR: React.FC<Props> = ({ children }) => {
	return <>{children}</>;
};

export default dynamic(() => Promise.resolve(NoSSR), { ssr: false });
