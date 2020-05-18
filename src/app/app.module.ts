import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CasinogamesComponent } from './casinogames/casinogames.component';
import { RealmoneycasinoComponent } from './realmoneycasino/realmoneycasino.component';
import { MobilecasinoComponent } from './mobilecasino/mobilecasino.component';
import { OnlineslotsComponent } from './onlineslots/onlineslots.component';

// import angular forms or else the forms will not work
import {FormsModule} from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { LasvegasComponent } from './play/lasvegas/lasvegas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CasinogamesComponent,
    RealmoneycasinoComponent,
    MobilecasinoComponent,
    OnlineslotsComponent,
    NotfoundComponent,
    FooterComponent,
    HeaderComponent,
    AsideComponent,
    LasvegasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
