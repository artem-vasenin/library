import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {

}

interface IState {

}

export default class BooksAside extends React.Component<IProps, IState> {
	render() {
		return (
			<div className='sidebar'>
				<h2 className='heading heading--type2'>Книги Сайдбар</h2>
			</div>
		);
	}
}