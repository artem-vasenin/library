import * as React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../Blocks/Molecules/Logo/Logo';
import Login from '../Login/Login';
import Constants from '../../constants/Constants';

export default class Header extends React.Component<{}, {}> {
	render() {
		return (
			<div className="fixed">
				<header className='section section--header header'>
					<div className="container">
						<div className='row'>
							<div className="col-md-2">
								<Logo />
							</div>
							<div className="col-md-8">
								<div className="service-name">
									<div className="service-name__text">{Constants.SERVICE_NAME}</div>
								</div>
							</div>
							<div className="col-md-2 header__login">
								<Login />
							</div>
						</div>
					</div>
				</header>

				<section className="section section--menu">
					<div className="container">
						<div className="row">
							<nav className="col-md-12 menu">
								<ul className="menu__list">
									<li className="menu__item">
										<NavLink to="/books" className="menu__link">{Constants.MENU.BOOKS.TITLE}</NavLink>
									</li>
									<li className="menu__item">
										<NavLink to="/chat" className="menu__link">{Constants.MENU.CHAT.TITLE}</NavLink>
									</li>
									<li className="menu__item">
										<NavLink to="/userroom" className="menu__link">{Constants.MENU.USERROOM.TITLE}</NavLink>
									</li>
									<li className="menu__item">
										<NavLink to="/contacts" className="menu__link">{Constants.MENU.CONTACTS.TITLE}</NavLink>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
