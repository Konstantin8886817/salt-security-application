import React, { useEffect, useState } from 'react';
import { Container } from './Checkbox.styled';

export const Checkbox = ({ label, value, onChange, color = 'purple' }) => {
	const [isChecked, setIsChecked] = useState(value);

	useEffect(() => {
		setIsChecked(value);
	}, [value]);

	const handleOnChange = () => {
		onChange && onChange(!value);
		setIsChecked(!isChecked);
	};

	return <Container onClick={handleOnChange} color={color}>{label}</Container>;
};
