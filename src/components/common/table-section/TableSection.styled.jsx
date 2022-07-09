import { Icon } from '@blueprintjs/core';
import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 12px;
`;

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 4px;
`;

export const SectionIcon = styled(Icon)`
	background-color: #F0F0F0;
	border-radius: 50%;
	margin-right: 4px;
	cursor: pointer;

	svg {
		fill: #a15ec0;
	}
`;

export const SectionTitle = styled.div`
	font-weight: bold;
	cursor: pointer;
`;

export const RowsStyled = styled.div`
	display: flex;
	flex-direction: column;
	color: #202D6B;
`;

export const CodeBlock = styled.div`
	box-shadow: 1px 2px 4px 2px rgba(65, 74, 119, 0.2);
    margin: 8px 0px;
`;
