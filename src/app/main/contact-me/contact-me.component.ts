import {Component, OnInit} from '@angular/core';
import EmailDto from './email.dto';
import EmailService from './email.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  providers: [EmailService]
})
export class ContactMeComponent implements OnInit {
  subject: string;
  email: string;
  message: string;
  public submitted = false;
  public isLoading = false;

  constructor(private readonly emailService: EmailService) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.isLoading = true;
    this.emailService.sendEmail(new EmailDto(this.subject, this.email, this.message)).subscribe(() => {
      this.isLoading = false;
      this.submitted = true;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }
}
