export class Card {
  public id: number;
  public src: string;
  public title: string;
  public description: string;

  constructor (id: number, src: string, title: string, description: string) {
    this.id = id;
    this.src = src;
    this.title = title;
    this.description = description;
  }
}
