import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// User module.
import { UserModule } from './user/user.module';
import { AdlistComponent } from './ad/adlist/adlist.component';
import { AddetailComponent } from './ad/addetail/addetail.component';

// Service.
import {UserService} from './shared/services/user/user.service';

// Material module with all material module imports.
import { MaterialModule } from './material/material.module';
import {MatButtonModule, MatCheckboxModule,
  MatCardModule,MatInputModule,MatAutocompleteModule} from '@angular/material';

// Routes.
import { AdRoutesModule } from './ad-routes/ad-routes.module'; 


@NgModule({
  declarations: [
    AppComponent,
    AdlistComponent,
    AddetailComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, UserModule, MatCardModule, MatButtonModule, AdRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
