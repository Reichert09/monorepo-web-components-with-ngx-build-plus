import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(FirstComponent, { injector: this.injector });
    customElements.define('first-component', el);
  }

 }
