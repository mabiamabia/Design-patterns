import Client from "./Client";

export default class Notity {
  constructor(private client: Client) {}

  sendEmail(): boolean {
    this.client.email;
    return true;
  }
}
