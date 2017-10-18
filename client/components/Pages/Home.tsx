import * as React from 'react';
import { connect } from 'react-redux';
import Register from '../Register/Register';

interface IProps {

}

interface IState {

}

export default class Home extends React.Component<IProps, IState> {
	render() {
		return (
			<section className='content'>
				<h1 className='heading heading--type1'>Главная страница</h1>
				<Register />
			</section>
		);
	}
}