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
import {ListItemComponent} from './home/tabs/list-item/list-item.component';
import {TabContentComponent} from './home/tabs/tab-content/tab-content.component';
import {TabsComponent} from './home/tabs/tabs.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from './services/auth.service';
import {Guards} from './services/guards';

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
        ListItemComponent,
        TabContentComponent,
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
    providers: [Guards, AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
