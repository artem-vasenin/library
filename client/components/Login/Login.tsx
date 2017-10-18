import * as React from 'react';
import { connect } from 'react-redux';
import Constants from '../../constants/Constants';
import Button from '../Blocks/Atoms/Button';

interface IProps {

}

interface IState {

}

export default class Header extends React.Component<IProps, IState> {
	render() {
		return (
			<div className='login container'>
                <Button 
                    type="primary"
                    text={ Constants.LOGIN }
                    action="LOGIN"
                />
			</div>
		);
	}
}