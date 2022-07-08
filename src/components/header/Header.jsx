import React from 'react';
import { EndPointApi } from '../common';
import { Details, Divider, HeaderWrapper, Method, Path } from './Header.styled';

const Text = {
	TEXT_ALL_API: 'All APIs',
}

export const Header = ({ method, api, path }) => {
	const BREADCRUMBS = [{ text: Text.TEXT_ALL_API }, { text: api }, { text: path }];

	return (
		<HeaderWrapper>
			<Details>
				<Method>{method.toUpperCase()}</Method>
				<Path>{path}</Path>
			</Details>
			<EndPointApi items={BREADCRUMBS} />
			<Divider />
		</HeaderWrapper>
	);
};
