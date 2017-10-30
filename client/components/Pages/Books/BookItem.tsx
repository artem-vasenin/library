import * as React from 'react';
// import ReactHtmlParser, { processNodes, convertNodeToElement} from 'react-html-parser';
import { IBook } from '../../../models/models';
import Constants from '../../../constants/Constants';

interface IProps {
	index: number,
	key: number,
	item: IBook,
	soauthors: number
}

interface IState {
	book: IBook | boolean
	readmore: boolean,
	readmoreClass: string
}

export default class BookItem extends React.Component<IProps, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			book: false,
			readmore: false,
			readmoreClass: ''
		}
	}

	onHandleReadmore = (e) => {
		e.preventDefault();

		let readmore: boolean = this.state.readmore;
		let newState: any = {};
		newState.readmore = !readmore;
		newState.readmoreClass = this.state.readmoreClass ? '' : 'rubberBand';

		this.setState(newState);
	}

	render() {
		return (
			<article className="book-item">
				<header className="book-item__header">
					<h3 className='heading heading--type3'>
						<a href={`/book/number-${this.props.item.id}`} className="book-item__link link">{this.props.item.title}</a>
					</h3>
				</header>
				<div className="book-item__content">
					<div className="book-item__desc">
						<button className={`button button--success button-readmore animated ${this.state.readmoreClass}`} onClick={this.onHandleReadmore}>
							{Constants.READMORE}
						</button>
						<div className={`book-item__readmore ${!this.state.readmore && 'hidden'}`}>
							{this.props.item.desc}
							{/*ReactHtmlParser(this.props.item.fullText)*/}
						</div>
					</div>					
				</div>
				<footer className="book-item__footer">
					<div className="book-item__soauthors">
						<div className="book-item__author">
							<i>Автор</i>: <b>{this.props.item.author}</b>, <i>Дата</i>: <b>{this.props.item.date}</b>
							{this.props.soauthors ? ' Соавторов: ' + this.props.soauthors : ''}
						</div>
					</div>
				</footer>
			</article>
		);
	}
}
