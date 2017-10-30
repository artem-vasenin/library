import * as React from 'react';
import { connect } from 'react-redux';
import { IBook, IGlobalState, IFields } from '../../../models/models';
// import FormLinkGenerator from '../../../functions/FormLinkGenerator';
import BookItem from './BookItem';
// import Form from '../../Blocks/Molecules/Form/Form';
import Constants from '../../../constants/Constants';
import Button from '../../Blocks/Atoms/Button';

interface IProps {
	user: number;
	role: number;
	bookList: IBook[];
}

interface IState {
	bookList: IBook[];
	limit: number;
	page: number;
}

class BooksList extends React.Component<IProps, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			bookList: this.props.bookList,
			limit: 10,
			page: 1
		}
	}

	formFields: IFields[] = [
		{
			component: 'FieldInput', 
			type: 'text', 
			name: 'title', 
			id: 'FieldTitle', 
			placeholder: Constants.FORM.TITLE, 
			required: true
		},
		{
			component: 'FieldTextarea', 
			name: 'desc', 
			id: 'FieldDesc', 
			placeholder: Constants.FORM.DESC, 
			required: true
		},
		{
			component: 'FieldTextarea', 
			name: 'fulltext', 
			id: 'FieldText', 
			placeholder: Constants.FORM.FULLTEXT, 
			required: true
		},
		{
			component: 'FieldButton', 
			name: 'title', 
			id: 'FieldText', 
			value: Constants.FORM.SUBMIT
		}
	];

	getPanele = () => {
		if (this.props.role > 1) {
			return (
				<div className="panele">
					<Button 
						type="primary"
						text={ Constants.BUTTONS.ADDBOOK }
						action="ADDBOOK"
						callback={this.getAddForm}
					/>
					<Button 
						type="primary"
						text={ Constants.BUTTONS.EDITBOOK }
						action="EDITBOOK"
						callback={this.getEditForm}
					/>
				</div>
			);
		} 
		return false;
	}

	getForm = (fields, cname) => {

	}
	
	getAddForm = (fields, cname) => {

	}
		
	getEditForm = (fields, cname) => {

	}
	// } <Form link="" fields={this.formFields} className="add-book" />;

	render() {
		return (
			<section className="book-list">
			<h2 className="heading heading--type2">Список книг</h2>
			{this.getPanele()}
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
