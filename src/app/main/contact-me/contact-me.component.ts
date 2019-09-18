import {Component, OnInit} from '@angular/core';
import EmailDto from './email.dto';
import EmailService from './email.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  public submitted = false;
  public isLoading = false;
  public isFormInvalid = false;

  public emailForm = new FormGroup({
    subject: new FormControl(''),
    email: new FormControl('', Validators.email),
    message: new FormControl('')
  });

  constructor(private readonly emailService: EmailService) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.emailForm.status === 'INVALID') {
      this.isFormInvalid = true;
      return;
    }
    this.isFormInvalid = false;
    this.isLoading = true;
    this.emailService.sendEmail(this.emailForm.value).subscribe(() => {
      this.isLoading = false;
      this.submitted = true;
      this.emailForm.reset();
    }, err => {
      console.log(err);
      this.isLoading = false;
      this.emailForm.reset();  // TODO: take this out in the future (shouldn't be her) => Enters catch because of firebase response
    });
  }
}
