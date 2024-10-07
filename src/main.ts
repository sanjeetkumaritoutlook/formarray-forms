import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//migration to standalone ->standalone bootstrapping API  
//import { bootstrapApplication } from '@angular/platform-browser';
//earlier in app.module.ts -appcomponent was bootstrapped
//build in angular.json
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
