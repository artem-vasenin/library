export interface IGlobalState {
	user: string;
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