import EmailDto from './email.dto';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
  }
)
export default class EmailService {

  constructor(private readonly http: HttpClient) {
  }

  public sendEmail(message: EmailDto) {
    console.log(message);
    return this.http.post('https://us-central1-personal-web-site-9ed90.cloudfunctions.net/sendMail', message).pipe((take(1)));
  }
}
