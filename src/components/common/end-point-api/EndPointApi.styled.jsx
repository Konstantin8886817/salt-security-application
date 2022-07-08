import { Icon } from '@blueprintjs/core';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
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
`;

export const SecondText = styled.div`
	margin-right: 4px;
	color: #5c2096;
    font-weight: unset;
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