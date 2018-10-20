import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AuthService} from './auth/auth.service';
import {Guards} from './auth/guards';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {TabsComponent} from './home/tabs/tabs.component';
import {LoginComponent} from './login/login.component';

const Routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [Guards]}
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        HomeComponent,
        TabsComponent,
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(Routes),
        MatIconModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatTabsModule,
        MatTableModule
    ],
    providers: [Guards, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
