import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { EventCompanyComponent } from './pricing/event-company/event-company.component';
import { EventAnyComponent } from './pricing/event-any/event-any.component';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
    declarations: [
        HomeComponent,
        PagesComponent,
        AccountSettingComponent,
        EventCompanyComponent,
        EventAnyComponent,
        GalleryComponent
    ],
    exports: [
        HomeComponent,
        PagesComponent,
        EventCompanyComponent,
        EventAnyComponent
       
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        BrowserModule, 
        CommonModule
    ]
})

export class PagesModule {}