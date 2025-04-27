import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importing the AppComponent

@NgModule({
  declarations: [
    AppComponent  // Declare AppComponent here
  ],
  imports: [
    BrowserModule  // Import BrowserModule to run the app in the browser
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrapping the AppComponent to start the app
})
export class AppModule { }
