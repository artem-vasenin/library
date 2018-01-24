import * as React from 'react';
import Logo from '../Blocks/Molecules/Logo/Logo';
import Constants from '../../constants/Constants';

interface IProps {

}

interface IState {

}

export default class Footer extends React.Component<IProps, IState> {
	render() {
		return (
			<footer className='section section--footer footer'>
				<div className="container">
					<div className="row">
						<div className="col-md-2 footer__logo">
							<Logo />
						</div>
						<div className="col-md-8 copy">
							{Constants.COPY}
						</div>
						<div className="col-md-2 madein">
							<span className="madein__text">
								Сайт сделан <br /><a className="madein__link" href="http://артёмвасенин.рф">студией "<b>Русич</b>"</a>
							</span>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
