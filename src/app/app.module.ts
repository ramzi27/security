import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
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
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {TabContentComponent} from './home/tabs/tab-content/tab-content.component';
import {TabsComponent} from './home/tabs/tabs.component';
import {ImageUploaderComponent} from './image-uploader/image-uploader.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard';
import {CanDeactivateGuard} from "./services/can-deactivate.guard";
import {ImageDialogComponent} from './home/tabs/image-dialog/image-dialog.component';
import {SettingsDialogComponent} from './settings-dialog/settings-dialog.component';

const Routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard]}
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        HomeComponent,
        TabsComponent,
        AddUserComponent,
        TabContentComponent,
        ImageUploaderComponent,
        ImageDialogComponent,
        SettingsDialogComponent,
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
        MatExpansionModule,
        MatDividerModule,
        MatListModule,
        HttpClientModule,
        MatTableModule,
    ],
    providers: [AuthGuard, AuthService, CanDeactivateGuard],
    bootstrap: [AppComponent],
    entryComponents: [ImageDialogComponent, SettingsDialogComponent]
})
export class AppModule {
}
