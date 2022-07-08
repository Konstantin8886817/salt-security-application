import React, { useEffect, useState } from 'react';
import { LandingPageContainer, Content } from './SaltSecurity.styled';
import { Header } from './components';
import data  from './utils/fe_data.json';

function SaltSecurityApp() {
	return (
		<LandingPageContainer>
			<Header method={data.method} path={data.path} api={data.api} />
		</LandingPageContainer>
	);
}

export default SaltSecurityApp;
