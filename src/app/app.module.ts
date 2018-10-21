import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule, MatDatepickerModule, MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule, MatNativeDateModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatSelectModule,
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
import { AddUserDialog } from './add-user/add-user-dialog.component';
import {FileUploadModule, MessageService} from "primeng/primeng";
import {ToastModule} from "primeng/toast";

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
        AddUserDialog,
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
        ToastModule
    ],
    providers: [Guards, AuthService,MessageService],
    bootstrap: [AppComponent],
    entryComponents: [AddUserDialog]
})
export class AppModule {
}
