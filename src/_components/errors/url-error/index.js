import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./index"

const StyledLink = styled(Link)`
text-decoration: none;
color: red;
font-weight: 800;
transition: all 300ms ease-in-out;
border-bottom: 2px solid transparent;
&:hover{
    border-bottom: 2px solid #FF0101;
}

`;

function Error404() {
	return (
		<div className="error-wrapper">
			<div className="error-container">
				<div className="notfound-container">
					<h1 style={{ fontSize: '100px', color: 'red' }} className="error">
						404
					</h1>

					<span />
					<span />
					<span />
					<span />
				</div>

				<StyledLink to="/" style={{ marginTop: '2rem' }}>
					Retour vers la page d'accueil
				</StyledLink>
			</div>
		</div>
	);
}

export default Error404;
