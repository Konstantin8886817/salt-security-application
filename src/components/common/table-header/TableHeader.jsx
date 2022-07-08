import React from 'react';
import { ColumnStyled, HeaderWrapper } from './TableHeader.styled';

export const TableHeader = ({ columns }) => {
	return (
		<HeaderWrapper>
			{columns.map((colName) => {
				return <ColumnStyled key={colName}>{colName.toUpperCase()}</ColumnStyled>;
			})}
		</HeaderWrapper>
	);
};
