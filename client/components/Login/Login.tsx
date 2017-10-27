import * as React from 'react';
import { connect } from 'react-redux';
import Constants from '../../constants/Constants';
import Button from '../Blocks/Atoms/Button';
import { IGlobalState } from '../../models/models';

interface IProps { }
interface IState { }

export default class Login extends React.Component<IProps, IState> {
	render() {
		return (
			<div className='login container'>
                <Button 
                    type="primary"
                    text={ Constants.BUTTONS.LOGIN }
                    action="LOGIN"
					callback={true}
                />
			</div>
		);
	}
}
