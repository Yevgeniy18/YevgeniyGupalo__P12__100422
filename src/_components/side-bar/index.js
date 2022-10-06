import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../../assets/iconsSidebar/icon1.png';
import Icon2 from '../../assets/iconsSidebar/icon2.png';
import Icon3 from '../../assets/iconsSidebar/icon3.png';
import Icon4 from '../../assets/iconsSidebar/icon4.png';

import './index.css';

const StyledLink = styled(Link)`
text-decoration:none;
`;

function SideBar() {
	return (
		<div className="side-bar">
			<div className="side-bar-container">
				<ul className="side-bar-icons">
					<StyledLink to="/">
						<img src={Icon} alt="icon-1" />
					</StyledLink>

					<StyledLink to="/">
						<img src={Icon2} alt="icon-1" />
					</StyledLink>
					<StyledLink to="/">
						<img src={Icon3} alt="icon-1" />
					</StyledLink>
					<StyledLink to="/">
						<img src={Icon4} alt="icon-1" />
					</StyledLink>
				</ul>

				<p className="copyright">Copiryght, SportSee 2020</p>
			</div>
		</div>
	);
}

export default SideBar;
