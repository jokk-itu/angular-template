import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent {
  private consentCookieName: string = "consentCookie";
  public hasGivenConsent: boolean =  false;

  public ngOnInit() {
    this.hasGivenConsent = document.cookie
      .split(";")
      .some((item) => item.trim().startsWith(this.consentCookieName + '='));
  }

  public acceptCookies() {
    this.hasGivenConsent = true;
    document.cookie = this.consentCookieName + "=true;secure; samesite=strict;";
  }

  public rejectCookies() {
    this.hasGivenConsent = true;
    document.cookie = this.consentCookieName + "=false;secure; samesite=strict;";
  }
}