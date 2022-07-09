export const defaultFilters = { query: '', pii: false };

export const getFilteredData = (sections, filters) => {
	let filteredSection = {};
	Object.keys(sections).forEach((sectionKey) => {
		filteredSection[sectionKey] = sections[sectionKey].filter((rowData) => {
			if (filters.pii && !rowData.pii) return false;
			return rowData.name.includes(filters.query);
		});
	});
	return filteredSection;
};

export const tabs = ['Request', 'Response'];

export const sectionLabels = {
	urlParams: 'URL Parameters',
	queryParams: 'Query Parameters',
	headers: 'Headers',
	body: 'Body',
};
