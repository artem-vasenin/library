import * as React from 'react';
import { connect } from 'react-redux';
import Logo from '../Blocks/Molecules/Logo/Logo';
import Login from '../Login/Login';
import Constants from '../../constants/Constants';

interface IProps {

}

interface IState {

}

export default class Header extends React.Component<IProps, IState> {
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
								{ Constants.SERVICE_NAME }
							</div>
						</div>
						<div className="col-md-2">
							<Login />
						</div>
					</div>
				</div>
			</header>
		);
	}
}