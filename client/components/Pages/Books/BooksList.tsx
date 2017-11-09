import * as React from 'react';
import {connect} from 'react-redux';
import {IBook, IGlobalState, IField} from '../../../models/models';
// import FormLinkGenerator from '../../../functions/FormLinkGenerator';
import BookItem from './BookItem';
import Form from '../../Blocks/Molecules/Form/Form';
import Constants from '../../../constants/Constants';
import Button from '../../Blocks/Atoms/Button';

interface IProps {
	bookList: IBook[];
	user: number;
	role: number;
}

interface IState {
	showForm: boolean;
	bookList: IBook[];
	limit: number;
	page: number;
	panelleButtonText: string;
}

class BooksList extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			bookList: this.props.bookList,
			limit: 10,
			page: 1,
			showForm: false,
			panelleButtonText: Constants.BUTTONS.ADDBOOK
		}
	}

	formFields: IField[] = [
		{
			component: 'FieldInput',
			type: 'text',
			name: 'title',
			id: 'field-title',
			placeholder: Constants.FORM.TITLE,
			className: 'field field--text',
			validation: {
				required: true,
				live: false,
				type: 'text'
			}
		},
		{
			component: 'FieldTextarea',
			name: 'desc',
			id: 'field-desc',
			placeholder: Constants.FORM.DESC,
			className: 'field field--textarea',
			validation: {
				required: true,
				live: false,
				type: 'text'
			}
		},
		{
			component: 'FieldTextarea',
			name: 'fulltext',
			id: 'field-fulltext',
			placeholder: Constants.FORM.FULLTEXT,
			className: 'field field--textarea',
			validation: {
				required: true,
				live: false,
				type: 'text'
			}
		},
		{
			component: 'FieldButton',
			type: 'field-submit',
			name: 'title',
			id: 'Submit',
			value: Constants.BUTTONS.ADDBOOK,
			className: 'button button--submit button--primary',
			validation: {
				required: true,
				live: false,
				type: 'button'
			}
		}
	];

	getPanele = () => {
		if (this.props.role) {
			let text = this.state.showForm ? 'Закрыть форму' : this.state.panelleButtonText;

			return (
				<div className="panele pull-right">
					<Button
						type={this.state.showForm ? 'warning' : 'primary'}
						text={text}
						action="ADDBOOK"
						callback={this.onHandleCkick}
					/>
				</div>
			);
		} else {
			return false;
		}
	}

	onHandleCkick = (cname, fields, path) => {
		this.setState({
			showForm: !this.state.showForm
		});
	}

	render() {
		return (
			<section className="book-list">
			<h2 className="heading heading--type2">Список книг</h2>
			{this.getPanele()}
			{this.state.showForm &&
			<Form
				link="/addbook"
				fields={this.formFields}
				className="form form--add-book"
			/>
			}
			{this.state.bookList.map((item: IBook, index: number) => {
				const soauthors = (item.soauthors && item.soauthors.length) ?  item.soauthors.length : 0;
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
		role: state.role,
		bookList: state.bookList
	};
};

export default connect(mapStateToProps)(BooksList);
