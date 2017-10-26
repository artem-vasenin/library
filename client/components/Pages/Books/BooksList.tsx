import * as React from 'react';
import { connect } from 'react-redux';
import { IBook, IGlobalState } from '../../../models/models';
import BookItem from './BookItem';

interface IProps {
	user: string
	bookList: IBook[];
}

interface IState {
	user: string,
	bookList: IBook[],
	limit: number,
	page: number
}

class BooksList extends React.Component<IProps, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			user: this.props.user,
			bookList: this.props.bookList,
			limit: 10,
			page: 1
		}
	}

	render() {
		return (
			<section className="book-list">
			<h2 className="heading heading--type2">Список книг</h2>
			{this.state.bookList.map((item: IBook, index: number) => {
				const soauthors = item.soauthors.length ?  item.soauthors.length : 0;
				return (
					<BookItem item={item} index={index} key={index} soauthors={soauthors} />
				);
			})}
			</section>
		);
	}
}

const mapStateToProps = (state: IGlobalState) => {
	return {
		user: state.user,
		bookList: state.bookList
	};
};

export default connect(mapStateToProps)(BooksList);
