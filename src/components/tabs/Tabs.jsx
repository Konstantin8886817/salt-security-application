import React from 'react';
import { Tab } from '../common';
import { TabsStyled } from './Tabs.styled';

export const Tabs = ({ tabs, onTabClicked, currentSelectedTab }) => {
	const tabsList = tabs.map((tab, index) => (
		<Tab key={tab} label={tab} tab={tab} onTabSelected={onTabClicked} index={index} isSelected={currentSelectedTab === tab} />
	));

	return <TabsStyled>{tabsList}</TabsStyled>;
};
