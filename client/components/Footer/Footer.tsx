import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {

}

interface IState {

}

export default class Footer extends React.Component<IProps, IState> {
	render() {
		return (
			<footer className='footer container'>
				Подвал
			</footer>
		);
	}
}