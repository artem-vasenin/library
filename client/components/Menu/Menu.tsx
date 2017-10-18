import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {

}

interface IState {

}

export default class Menu extends React.Component<IProps, IState> {
	render() {
		return (
			<section className="container">
				<div className="row">
					<nav className="col-md-12 menu">
						<ul className="menu__list">
							<li className="menu__item"><a href="" className="menu__link">Книги</a></li>
							<li className="menu__item"><a href="" className="menu__link">Кабинет</a></li>
							<li className="menu__item"><a href="" className="menu__link">Чат</a></li>
							<li className="menu__item"><a href="" className="menu__link">Контакты</a></li>
						</ul>
					</nav>
				</div>
			</section>
		);
	}
}