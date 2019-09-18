import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  facebookImgSrc = '../../../assets/social/facebook-logo-white.svg';
  linkedinImgSrc = '../../../assets/social/linkedin-logo-white.svg';
  instagramImgSrc = '../../../assets/social/instagram-logo-white.svg';
  githubImgSrc = '../../../assets/social/github-logo-white.png';

  constructor() {
  }

  ngOnInit() {
  }

  onMouseOver(socialApp) {
    switch (socialApp) {
      case 'facebook':
        this.facebookImgSrc = '../../../assets/social/facebook-logo.svg';
        break;
      case 'linkedin':
        this.linkedinImgSrc = '../../../assets/social/linkedin-logo.svg';
        break;
      case 'instagram':
        this.instagramImgSrc = '../../../assets/social/instagram-logo.svg';
        break;
      case 'github':
        this.githubImgSrc = '../../../assets/social/github-logo.png';
        break;
    }
  }

  onMouseOut(socialApp) {
    switch (socialApp) {
      case 'facebook':
        this.facebookImgSrc = '../../../assets/social/facebook-logo-white.svg';
        break;
      case 'linkedin':
        this.linkedinImgSrc = '../../../assets/social/linkedin-logo-white.svg';
        break;
      case 'instagram':
        this.instagramImgSrc = '../../../assets/social/instagram-logo-white.svg';
        break;
      case 'github':
        this.githubImgSrc = '../../../assets/social/github-logo-white.png';
        break;
    }
  }

}
