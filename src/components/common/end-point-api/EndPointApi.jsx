import React from 'react';
import { Container, IconStyled, SecondText, Text, Wrapper } from './EndPointApi.styled';

const IconType = {
	CHEVRON_RIGHT: 'chevron-right',
};

export const EndPointApi = ({ items }) => {
	return (
		<Wrapper>
			{items.map(({ text }, index) => {
				const handleLastIndex = index !== items.length - 1;
				return (
					<Container key={text}>
						{handleLastIndex ? <Text>{text}</Text> : <SecondText>{text}</SecondText> }
						{handleLastIndex && <IconStyled icon={IconType.CHEVRON_RIGHT} />}
					</Container>
				);
			})}
		</Wrapper>
	);
};
