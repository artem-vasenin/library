export interface IGlobalState {
	user: number;
	role: number;
	bookList: IBook[] | boolean;
	book: IBook | boolean;
}

export interface IBook {
	id: number,
	author: string;
	soauthors?: number[];
	date: string;
	title: string;
	desc: string;
	fullText: string;
}

export interface IFields {
	component: string;
	type?: string;
	name: string;
	id?: string;
	value?: string | number | boolean;
	placeholder?: string;
	label?: string;
	required?: boolean;
}

export interface IForm {
	fields: IFields[];
	className: string;
	link: string;
}