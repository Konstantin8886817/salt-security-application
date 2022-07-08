import React from 'react';
import { TabLabel, TabSelected, TabStyled } from './Tab.styled';

export const Tab = ({ label, tab, onTabSelected, isSelected, index }) => {
	const handleTabClicked = (event) => {
		event.stopPropagation();
		onTabSelected(tab, index);
	};

	return <TabStyled onClick={handleTabClicked}>{isSelected ? <TabSelected>{label}</TabSelected> : <TabLabel>{label}</TabLabel>}</TabStyled>;
};
