export default class EmailDto {
  subject: string;
  from: string;
  message: string;

  constructor(subject: string, from: string, message: string) {
    this.subject = subject;
    this.from = from;
    this.message = message;
  }
}
