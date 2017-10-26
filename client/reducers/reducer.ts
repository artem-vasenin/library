import { IGlobalState } from '../models/models';

const bookList = [
	{
		id: 1230,
		author: "Артём",
		soauthors: [],
		date: "17.10.2017",
		title: "Как прочесть мой код и не потерять рассудок",
		desc: "В данной книге автор любезно рассказывает о мерах предосторожности для проверяющих его творение",
		fullText: "<p>Текст текст рыбный текст, текст текст, много рыбного текста, текст. А также как ни странно текст, текст, рыбный текст, текст текст</p><p>Текст текст рыбный текст, текст текст, много рыбного текста, текст. А также как ни странно текст, текст, рыбный текст, текст текст</p><p>Текст текст рыбный текст, текст текст, много рыбного текста, текст. А также как ни странно текст, текст, рыбный текст, текст текст</p>"
	}, {
		id: 1231,
		author: "Ириха",
		soauthors: [1, 5],
		date: "10.09.2017",
		title: "Призрак чёрного программиста",
		desc: "Полная ужасов и жутких историй книга, в ней вы сталкнётесь со страхами поджидающими вас в темных коридорах офиса Accenture.",
		fullText: "<p>Текст текст рыбный текст, текст текст, много рыбного текста, текст. А также как ни странно текст, текст, рыбный текст, текст текст<br>Текст текст рыбный текст, текст текст, много рыбного текста, текст. А также как ни странно текст, текст, рыбный текст, текст текст<br>Текст текст рыбный текст, текст текст, много рыбного текста, текст. А также как ни странно текст, текст, рыбный текст, текст текст</p>"
	}, {
		id: 1232,
		author: "Жанна",
		soauthors: [],
		date: "5.11.2016",
		title: "Великий писец или крах стенда перед Демо",
		desc: "В книге показан героический и самоотверженный труд клана бэкеров и их союзников - клан фронтендеров в борьбе с неожиданным несчастьем!",
		fullText: "<p>Текст текст рыбный текст, текст текст, много рыбного текста, текст. А также как ни странно текст, текст, рыбный текст, текст текст</p><p>Текст текст рыбный текст, текст текст, много рыбного текста, текст. А также как ни странно текст, текст, рыбный текст, текст текст</p><p>Текст текст рыбный текст, текст текст, много рыбного текста, текст. А также как ни странно текст, текст, рыбный текст, текст текст</p>"
	}
];

const initialState: IGlobalState = {
	user: 'guest',
	bookList: bookList,
	book: false
};

export default function reducer(state: IGlobalState = initialState, action: any) {
	return state;
}