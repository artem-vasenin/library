export interface IGlobalState {
	user: string;
	bookList: IBook[] | boolean;
	book: IBook | boolean;
}

export interface IBook {
	author: string;
	soauthors?: string[];
	date: string;
	title: string;
	desc: string;
	fullText: string;
}