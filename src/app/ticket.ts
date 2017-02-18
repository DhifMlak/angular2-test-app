export class Ticket {
  constructor(
    public id: number,
    public title: string,
    public category: string,
    public description: string,
    public created_at?: string,
    public updated_at?: string
  ) {  }
}
