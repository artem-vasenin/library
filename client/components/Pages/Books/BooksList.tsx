import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {

}

interface IState {

}

export default class BooksList extends React.Component<IProps, IState> {
	render() {
		return (
			<h2 className='heading heading--type2'>Список книг</h2>
		);
	}
}
