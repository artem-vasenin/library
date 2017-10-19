import * as React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

interface IProps {

}

interface IState {

}

export default class Menu extends React.Component<IProps, IState> {
	render() {
		return (
			<section className="section section--menu">
				<div className="container">
					<div className="row">
						<nav className="col-md-12 menu">
							<ul className="menu__list">
								<li className="menu__item">
									<NavLink to="/books" className="menu__link">Книги</NavLink>
								</li>
								<li className="menu__item">
									<NavLink to="/chat" className="menu__link">Чат</NavLink>
								</li>
								<li className="menu__item">
									<NavLink to="/userroom" className="menu__link">Кабинет</NavLink>
								</li>
								<li className="menu__item">
									<NavLink to="/contacts" className="menu__link">Контакты</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</section>
		);
	}
}