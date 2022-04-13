import React from 'react';
import SportSeeLogo from '../assets/logo/sportSeeLogo.png';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLinked = styled(Link)`
list-style:none; 
color: #fff;
text-decoration:none;
font-size: 25px;
font-weight: 800;
`;

function Header() {
	return (
		<header>
			<StyledLinked to="/" className="logo-container">
				<img src={SportSeeLogo} alt="sportsee-logo" />
			</StyledLinked>

			<nav>
				<ul>
					<StyledLinked to="/">Accueil</StyledLinked>
					<StyledLinked to="/">Profil</StyledLinked>
					<StyledLinked to="/">Réglage</StyledLinked>
					<StyledLinked to="/">Communauté</StyledLinked>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
