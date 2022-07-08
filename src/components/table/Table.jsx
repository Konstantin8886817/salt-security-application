import React from 'react';
import { TableHeader, TableSection } from '../common';
import { TableSections, TableWrapper } from './Table.styled';

export const Table = ({ columns, sections, sectionLabels }) => {
	return (
		<TableWrapper>
			<TableHeader columns={columns} />
			<TableSections>
				{Object.keys(sections).map((sectionName) => (
					<TableSection key={sectionName} sectionName={sectionLabels[sectionName]} sectionRowsData={sections[sectionName]} />
				))}
			</TableSections>
		</TableWrapper>
	);
};
