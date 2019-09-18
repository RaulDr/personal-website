import { Injectable } from '@angular/core';
import EmailDto from './email.dto';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable()
export default class EmailService {

  constructor(private readonly http: HttpClient) {
  }

  public sendEmail(message: EmailDto) {
    return this.http.post('https://us-central1-personal-web-site-9ed90.cloudfunctions.net/sendMail', message).pipe((take(1)));
  }
}
