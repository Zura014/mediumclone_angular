import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { provideStore } from '@ngrx/store';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes), provideStore()],
});
