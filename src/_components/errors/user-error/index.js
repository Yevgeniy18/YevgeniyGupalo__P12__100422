import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PuffLoader from 'react-spinners/PuffLoader';
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
				<h2 style={{ color: '#fff' }}>Ooops! On dirait qu'il y a une erreur</h2>
				<PuffLoader color={color} loading={loading} css={override} size={70} />
				<StyledLink to="/">Retour vers la page d'accueil</StyledLink>
			</div>
		</div>
	);
}

export default NotFound;
