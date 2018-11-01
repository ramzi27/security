import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    MatBadgeModule,
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
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {WebcamModule} from 'ngx-webcam';
import {FileUploadModule, GalleriaModule, MessageService} from 'primeng/primeng';
import {AddUserComponent} from './add-user/add-user.component';

import {AppComponent} from './app.component';
import {CameraComponent} from './camera/camera.component';
import {GalleryComponent} from './gallery/gallery.component';
import {EventContentComponent} from './header/events/event-content/event-content.component';
import {EventsComponent} from './header/events/events.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {ImageDialogComponent} from './home/tabs/image-dialog/image-dialog.component';
import {TabContentComponent} from './home/tabs/tab-content/tab-content.component';
import {TabsComponent} from './home/tabs/tabs.component';
import {ImageUploaderComponent} from './image-uploader/image-uploader.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './services/auth-guard';
import {AuthService} from './services/auth.service';
import {CanDeactivateGuard} from './services/can-deactivate.guard';
import {SettingsDialogComponent} from './settings-dialog/settings-dialog.component';
import {AlertDialogComponent} from './alert-dialog/alert-dialog.component';
import {UserFormComponent} from './add-user/user-form/user-form.component';
import {MessagingService} from "./services/messaging.service";
import {ToastModule} from "primeng/toast";

const Routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard]}
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
        CameraComponent,
        EventsComponent,
        EventContentComponent,
        GalleryComponent,
        AlertDialogComponent,
        UserFormComponent,
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
        WebcamModule,
        MatSnackBarModule,
        MatBadgeModule,
        GalleriaModule,
        ToastModule
    ],
    providers: [AuthGuard, AuthService, CanDeactivateGuard, MessageService, MessagingService],
    bootstrap: [AppComponent],
    entryComponents:
        [ImageDialogComponent,
            SettingsDialogComponent,
            CameraComponent,
            GalleryComponent,
            AlertDialogComponent
        ]
})
export class AppModule {
}
