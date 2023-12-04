import Route from '@ember/routing/route';

export default class BooksRoute extends Route {
    async model() {
        let response = await fetch('https://teststand.t-mobis.ru/Books');

        let text = JSON.parse(await response.text()); // JSON битый?
        let json = JSON.parse(text);
        return json;
    }
}