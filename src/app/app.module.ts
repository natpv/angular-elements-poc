import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';


import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { ConfigComponent } from './config/config.component';
import { AgGridModule } from 'ag-grid-angular';




@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [GreetComponent],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(GreetComponent, { injector: this.injector});
    customElements.define('my-greet', el);

    const el1 = createCustomElement(ConfigComponent, { injector : this.injector});
    customElements.define('config-ztp', el1);
  }

  ngDoBootstrap() {
    
  }

}
