import { Icon } from '@blueprintjs/core';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 16px;
	align-items: flex-start;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-right: 4px;
`;

export const Text = styled.div`
	margin-right: 4px;
	color: #5c2096;
	font-size: 14px;
	font-weight: bold;
`;

export const SecondText = styled.div`
	margin-right: 4px;
	color: #5c2096;
`;

export const IconStyled = styled(Icon)`
	align-items: center;
	display: flex;
	svg {
		path {
			fill: #5c2096;
		}
	}
`;
