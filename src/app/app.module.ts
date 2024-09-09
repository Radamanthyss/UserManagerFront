import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoaderComponent } from './Pages/Partials/loader/loader.component';
import { UserComponent } from './Pages/user/user.component';
import { MatDividerModule } from '@angular/material/divider';
import { UserEditComponent } from './Pages/user-edit/user-edit.component';
import { UserCreateComponent } from './Pages/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoaderComponent,
    UserComponent,
    UserEditComponent,
    UserCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
