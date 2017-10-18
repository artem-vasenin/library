import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
								<li className="menu__item"><Link to="/books" className="menu__link">Книги</Link></li>
								<li className="menu__item"><Link to="/userroom" className="menu__link">Кабинет</Link></li>
								<li className="menu__item"><Link to="/chat" className="menu__link">Чат</Link></li>
								<li className="menu__item"><Link to="/contacts" className="menu__link">Контакты</Link></li>
							</ul>
						</nav>
					</div>
				</div>
			</section>
		);
	}
}