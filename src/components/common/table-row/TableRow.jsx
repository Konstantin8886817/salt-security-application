import React from 'react';
import { columnsScheme } from '../../../SaltSecurityApp';
import { RowStyled, RowWrapper } from './TableRow.styled';

export const TableRow = ({ rowData }) => {
	return (
		<RowWrapper>
			{Object.keys(rowData).map((colData, colIndex) => {
				const handleChange = (value) => {
					rowData[colData] = value;
				};
				return (
					<RowStyled key={`row-${columnsScheme[colIndex].key}`}>
						{columnsScheme[colIndex].component
							? React.cloneElement(columnsScheme[colIndex].component, { value: rowData[colData], onChange: handleChange })
							: rowData[colData]}
					</RowStyled>
				);
			})}
		</RowWrapper>
	);
};
