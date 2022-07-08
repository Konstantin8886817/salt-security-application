import React from 'react';
import { Container, IconStyled, SecondText, Text, Wrapper } from './EndPointApi.styled';

const IconType = {
	CHEVRON_RIGHT: 'chevron-right',
}

export const EndPointApi= ({ items }) => {
	return (
		<Wrapper>
			{items.map(({ text }, index) => {
				const handleLastIndex = index !== items.length - 1;
				return (
					<Container key={text}>
						<Text>
							{handleLastIndex ? <></> : <SecondText>{text}</SecondText>}
							
						</Text>
						{handleLastIndex && <IconStyled icon={IconType.CHEVRON_RIGHT} />}
					</Container>
				);
			})}
		</Wrapper>
	);
};
