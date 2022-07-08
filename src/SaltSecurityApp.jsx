import React, { useEffect, useState } from 'react';
import { LandingPageContainer, Content } from './SaltSecurity.styled';
import { Header, Tabs, SearchBar } from './components';
import data from './utils/fe_data.json';

const tabs = ['Request', 'Response'];

const sectionLabels = {
	URL_PARAMS: 'URL Parameters',
	QUERY_PARAMS: 'Query Parameters',
	HEADERS: 'Headers',
	BODY: 'Body',
};

const defaultFilters = { query: '', pii: false };

const getFilteredData = (sections, filters) => {
	let filteredSection = {};
	Object.keys(sections).forEach((sectionKey) => {
		filteredSection[sectionKey] = sections[sectionKey].filter((rowData) => {
			if (filters.pii && !rowData.pii) return false;
			return rowData.name.includes(filters.query);
		});
	});
	return filteredSection;
};

function SaltSecurityApp() {
	const [currentTab, setCurrentTab] = useState(tabs[0]);
	const [filters, setFilters] = useState(defaultFilters);

	const sections = data[currentTab.toLowerCase()];
	const [filteredData, setFilteredData] = useState(sections);

	useEffect(() => {
		setFilteredData(getFilteredData(sections, filters));
	}, [currentTab]);

	const handleApplyFilters = () => {
		setFilteredData(getFilteredData(sections, filters));
	};

	const handleResetFilters = () => {
		setFilters(defaultFilters);
		setFilteredData(getFilteredData(sections, defaultFilters));
	};

	const handleQueryChange = (value) => {
		setFilters({ ...filters, query: value });
	};

	const handlePIIFilterChange = () => {
		setFilters({ ...filters, pii: !filters.pii });
	};

	return (
		<LandingPageContainer>
			<Header method={data.method} path={data.path} api={data.api} />
			<Tabs tabs={tabs} onTabClicked={setCurrentTab} currentSelectedTab={currentTab} />
			<Content>
			<SearchBar
					query={filters.query}
					onSearchInputChanged={handleQueryChange}
					isPIIFilter={filters.pii}
					onPIIFilterChanged={handlePIIFilterChange}
					onApply={handleApplyFilters}
					onResetFilters={handleResetFilters}
				/>
			</Content>
		</LandingPageContainer>
	);
}

export default SaltSecurityApp;