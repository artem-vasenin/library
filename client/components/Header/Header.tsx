import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {

}

interface IState {

}

export default class Header extends React.Component<IProps, IState> {
	render() {
		return (
			<header className='header container'>
				Шапка
			</header>
		);
	}
}