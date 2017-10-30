import * as React from 'react';
import Constants from '../../constants/Constants';
import Button from '../Blocks/Atoms/Button';

export default class Login extends React.Component<any, any> {

	callback = (e) => {
		console.log(e);
	}

	render() {
		return (
			<div className='login container'>
                <Button 
                    type="primary"
                    text={ Constants.BUTTONS.LOGIN }
                    action="LOGIN"
					callback={this.callback}
                />
			</div>
		);
	}
}
