export interface IGlobalState {
	user: number;
	role: number;
	bookList: IBook[] | boolean;
	book: IBook | boolean;
	users: IUser[];
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

export interface IField {
	component: string;
	type?: string;
	name: string;
	id?: string;
	value?: string | number | boolean;
	placeholder?: string;
	label?: string;
	required?: boolean;
	className: string;
}

export interface IForm {
	fields: IField[];
	className: string;
	link: string;
}

export interface IUser {
	id: number;
	name: string;
	login: string;
	role: number;
}