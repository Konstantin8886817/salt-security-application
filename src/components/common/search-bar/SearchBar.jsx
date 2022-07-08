import React from 'react';
import {
	BarContainer,
	BarStyled,
	ButtonStyled,
	CheckboxStyled,
	Divider,
	ResetFilters,
	SearchBarContainer,
	SearchIcon,
	SearchInput,
} from './SearchBar.styled';

const SearchBarText = {
	RESET_FILTERS: 'Reset Filter',
	SEARCH: 'Search',
	LABEL: 'Show PII only',
	APPLY: 'Apply',
};

export const SearchBar = ({ query, isPIIFilter, onSearchInputChanged, onPIIFilterChanged, onResetFilters, onApply }) => {
	const handleOnInputChange = (event) => {
		onSearchInputChanged && onSearchInputChanged(event.target.value);
	};

	const handleOnCheckboxChanged = () => {
		onPIIFilterChanged && onPIIFilterChanged();
	};

	return (
		<SearchBarContainer>
			<BarStyled>
				<BarContainer>
					<SearchIcon icon={'search'} />
					<SearchInput placeholder={SearchBarText.SEARCH} value={query} onChange={handleOnInputChange} />
					<Divider />
					<CheckboxStyled checked={isPIIFilter} label={SearchBarText.LABEL} onChange={handleOnCheckboxChanged} />
				</BarContainer>
				<ButtonStyled text={SearchBarText.APPLY} onClick={onApply} />
			</BarStyled>
			<ResetFilters onClick={onResetFilters}>{SearchBarText.RESET_FILTERS}</ResetFilters>
		</SearchBarContainer>
	);
};
