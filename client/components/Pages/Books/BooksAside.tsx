import * as React from 'react';
import {connect} from 'react-redux';
import { IUser, IGlobalState} from '../../../models/models';

interface IProps {
	users: IUser[];
}

interface IState {}

class BooksAside extends React.Component<IProps, IState> {
	render() {
		return (
			<div className='aside__content'>
				<div className='heading heading--type2'>Авторы: </div>
				<div className="users">
					<ul className="users__list">
					{this.props.users.map((item: IUser, index: number) => {
						return (
							<li className={item.role ? 'users__item' : 'users__ityem hidden'}>
								<a href={`/user/${item.login}`} className="users__link">{item.name}</a>
							</li>			
						);
					})}
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: IGlobalState) => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps)(BooksAside);
