import * as React from 'react';

interface IProps {

}

interface IState {

}

export default class BooksAside extends React.Component<IProps, IState> {
	render() {
		return (
			<div className='aside__content'>
				<div className='heading heading--type2'>Авторы: </div>
			</div>
		);
	}
}