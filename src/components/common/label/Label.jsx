import React from 'react';
import { Wrapper } from './Label.styled';

export const Label = ({ value }) => {
	return <Wrapper>{value.toUpperCase()}</Wrapper>;
};
