import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {FileUploadModule} from 'primeng/primeng';
import {AddUserComponent} from './add-user/add-user.component';

import {AppComponent} from './app.component';
import {AuthService} from './auth/auth.service';
import {Guards} from './auth/guards';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {TabsComponent} from './home/tabs/tabs.component';
import {LoginComponent} from './login/login.component';

const Routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [Guards]},
    {path: 'add-user', component: AddUserComponent, canActivate: [Guards]}
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        HomeComponent,
        TabsComponent,
        AddUserComponent,
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
        MatTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatDialogModule,
        FileUploadModule,
        MatProgressBarModule,
        MatExpansionModule
    ],
    providers: [Guards, AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
