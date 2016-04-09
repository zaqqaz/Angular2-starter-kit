class Feature {
    public id: number;
    public title: string;
    public article: string;

    constructor({id, title, article}) {
        this.id = id;
        this.title = title;
        this.article = article;
    }
}

export default Feature;