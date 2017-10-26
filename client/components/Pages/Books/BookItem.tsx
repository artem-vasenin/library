import * as React from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser, { processNodes, convertNodeToElement} from 'react-html-parser';
import { IBook } from '../../../models/models';
import Constants from '../../../constants/constants';

interface IProps {
	index: number,
	key: number,
	item: IBook
}

interface IState {
	book: IBook | boolean
}

export default class BookItem extends React.Component<IProps, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			book: false
		}
	}

	render() {
		return (
			<article className="book-item">
				<header className="book-item__header">
					<h3 className='heading heading--type2'>{this.props.item.title}
					</h3>
					<div className="book-item__author">(Автор: {this.props.item.author}, дата: {this.props.item.date})</div>
				</header>
				<div className="book-item__content">
					<div className="book-item__desc">
						{this.props.item.desc}
						<button className="button button--success button-readmore">
							{Constants.READMORE}
						</button>
						<div className="book-item__readmore hidden">
							{ReactHtmlParser(this.props.item.fullText)}
						</div>
					</div>					
				</div>
				<footer className="book-item__footer">
					<div className="book-item__soauthors">
						{this.props.item.soauthors}
					</div>
				</footer>
			</article>
		);
	}
}
