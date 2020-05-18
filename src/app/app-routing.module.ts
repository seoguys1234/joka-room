//defalt import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// additional import. Note: Names must be the same as the one created and add "Componet" at the End
import { HomeComponent } from './home/home.component';
import { CasinogamesComponent } from './casinogames/casinogames.component';
import { MobilecasinoComponent } from './mobilecasino/mobilecasino.component';
import { RealmoneycasinoComponent } from './realmoneycasino/realmoneycasino.component';
import { OnlineslotsComponent } from './onlineslots/onlineslots.component';
import { LasvegasComponent } from './play/lasvegas/lasvegas.component';

//404 pages handle import
import { NotfoundComponent } from './notfound/notfound.component';

//All the route(Links) must be done under the below Array. Note Make sure the Componet name starts with Capital Leter.
const routes: Routes = [
{path: '', component: HomeComponent },
{path: 'casinogames', component: CasinogamesComponent },
{path: 'mobilecasino', component: MobilecasinoComponent },
{path: 'realmoneycasino', component: RealmoneycasinoComponent },
{path: 'onlineslots', component: OnlineslotsComponent },
//route for 404 errors
{ path: '**', component: NotfoundComponent },
// redirecting handler
{path: 'lasvegas', component: LasvegasComponent}, 
// { path: 'lasvegas', redirectTo: '/onlineslots', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
