import * as React from 'react';

interface IProps {

}

interface IState {

}

export default class UserRoomAside extends React.Component<IProps, IState> {
	render() {
		return (
			<div className='aside__content'>
				<div className='heading heading--type2'>Кабинет Сайдбар</div>
			</div>
		);
	}
}