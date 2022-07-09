import { Button, Checkbox, Icon } from '@blueprintjs/core';
import styled from '@emotion/styled';

export const SearchBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 28px;
`;

export const BarStyled = styled.div`
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	height: 40px;
`;

export const BarContainer = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #ffffff;
	padding: 8px;
	align-items: center;
	flex-grow: 1;
`;

export const SearchIcon = styled(Icon)`
	margin-left: 12px;
	svg {
		fill: #616161;
	}
`;

export const SearchInput = styled.input`
	display: flex;
	width: available;
	outline: none;
	flex-grow: 1;
	border: none;
	padding-left: 12px;
	color: #616161;
	font-size: 14px;
	font-weight: 600;
`;

export const Divider = styled.div`
	width: 1px;
	height: 100%;
	border-left: 1px solid #616161;
	margin-right: 30px;
`;

export const CheckboxStyled = styled(Checkbox)`
	margin-bottom: 0px;
	display: flex;
	margin-right: 30px;
    cursor: pointer;
	font-size: 14px;

	.caption;
`;

export const ButtonStyled = styled(Button)`
	height: 100%;
	width: 120px;
	outline: none;
	background-color: #5c2096;
	background-image: unset;
	color: #ffffff;
	border-radius: 0;
	border: none;
	font-size: 16px;
	font-weight: 600;
    cursor: pointer;
`;

export const ResetFilters = styled.div`
	display: flex;
	align-self: flex-end;
    margin-top: 12px;
    font-weight: 600; 
	color: #5c2096;
	cursor: pointer;
`;
