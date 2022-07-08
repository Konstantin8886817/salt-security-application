import React, { useEffect, useState } from 'react';
import { Container } from './Checkbox.styled';

export const Checkbox = ({ label, value, onChange }) => {
	const [isChecked, setIsChecked] = useState(value);

	useEffect(() => {
		setIsChecked(value);
	}, [value]);

	const handleOnChange = () => {
		onChange && onChange(!value);
		setIsChecked(!isChecked);
	};

	return <Container onClick={handleOnChange}>{label}</Container>;
};
