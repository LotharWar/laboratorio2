import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';



import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
   
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
