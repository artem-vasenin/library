import * as React from 'react';
import { connect } from 'react-redux';
import Logo from '../Blocks/Molecules/Logo/Logo';
import Login from '../Login/Login';
import Constants from '../../constants/Constants';

export default class Header extends React.Component<void, void> {
	render() {
		return (
			<header className='section section--header header'>
				<div className="container">
					<div className='row'>
						<div className="col-md-2">
							<Logo />
						</div>
						<div className="col-md-8">
							<div className="service-name">
								<div className="service-name__text">{ Constants.SERVICE_NAME }</div>
							</div>
						</div>
						<div className="col-md-2 header__login">
							<Login />
						</div>
					</div>
				</div>
			</header>
		);
	}
}