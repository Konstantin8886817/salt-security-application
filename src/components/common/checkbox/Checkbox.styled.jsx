import styled from '@emotion/styled';

export const Container = styled.div`
	padding-right: 24px;
	padding-left: 24px;
	font-weight: bold;
	user-select: none;
	color: ${props => (props.color ? `#202D6B` : `#A15EC0`)};
	border: 1px solid #5c2096;
	cursor: pointer;
`;
