import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PuffLoader from 'react-spinners/PuffLoader';
import "./index.css"
const override = css`
	display: block;
	border-color: red;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: red;
font-weight: 800;
`;

function NotFound() {
	const [ loading ] = useState(true);
	const [ color ] = useState('red');
	return (
		<div className="error-wrapper">
			<div className="error-container">
				<h2 style={{ color: '#fff' }}>Ooops! On dirait que l'utlisateur n"exsite pas</h2>
				<PuffLoader color={color} loading={loading} css={override} size={70} />
				<StyledLink to="/">Retour en arriere</StyledLink>
			</div>
		</div>
	);
}

export default NotFound;
