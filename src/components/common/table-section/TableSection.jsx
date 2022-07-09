import React, { useState } from 'react';
import { Collapse, Pre } from '@blueprintjs/core';
import { TableRow } from '../table-row';
import { SectionContainer, SectionIcon, SectionTitle, SectionWrapper, RowsStyled, CodeBlock } from './TableSection.styled';

const renderEmptyData = () => {
	return <Pre>No Data</Pre>;
};

export const TableSection = ({ sectionName, sectionRowsData }) => {
	const [isOpen, setIsOpen] = useState(false);

	const isClickedToOpenSection = () => {
		setIsOpen(!isOpen);
	};

	return (
		<SectionWrapper key={sectionName}>
			<SectionContainer>
				<SectionIcon size={16} icon={isOpen ? 'caret-down' : 'caret-right'} />
				<SectionTitle onClick={isClickedToOpenSection}>{sectionName}</SectionTitle>
			</SectionContainer>
			<div>
				<Collapse isOpen={isOpen}>
					<RowsStyled>
						{sectionRowsData.length > 0
							? sectionRowsData.map((rowData) => (
									<CodeBlock>
										<TableRow key={rowData.name} isOpen={isOpen} rowData={rowData} />
									</CodeBlock>
							  ))
							: renderEmptyData()}
					</RowsStyled>
				</Collapse>
			</div>
		</SectionWrapper>
	);
};
