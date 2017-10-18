import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {

}

interface IState {

}

export default class Register extends React.Component<IProps, IState> {
	render() {
		return (
			<section className='register'>
				Регистрация пользователя
			</section>
		);
	}
}