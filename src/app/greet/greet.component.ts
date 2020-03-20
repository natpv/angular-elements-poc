import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html'
})
export class GreetComponent implements OnInit {

  @Input() name: string;
  @Output() greet = new EventEmitter();
  @Input() styleName: string;
  cssUrl: string;
  appName: string;

  constructor(@Inject(DOCUMENT) private document: Document, public sanitizer: DomSanitizer) {
   }

  ngOnInit(): void {
    // this.cssUrl = this.styleName === 'EPNM' ? 'assets/greet.cw.component.css' : 'assets/greet.component.css';
  }

  emitLoadCSS(appName) {
    this.loadStyle(appName);
    this.greet.emit(`Hi, ${name}`);
  }

  loadStyle(appName) {
    console.log("inside loadstyle");
    const head = this.document.getElementsByTagName('head')[0];
    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    let styleUrl = appName === 'CW' ? 'assets/greet.cw.component.css' : 'assets/greet.component.css';

    if (themeLink) {
      themeLink.href = styleUrl;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleUrl}`;

      head.appendChild(style);
    }

    

  }

}
