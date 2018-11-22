import { RouterModule, Routes  } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { PortafolioComponent } from "./portafolio/portafolio.component";
import { PhototipsComponent } from "./phototips/phototips.component";
import { EventsComponent } from "./events/events.component";
import { CompanyComponent } from "./company/company.component";
import { ShopComponent } from "./shop/shop.component";
import { ContactComponent } from "./contact/contact.component";
const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'home', component: HomeComponent, data:{titulo: 'Home'}},
            {path: 'account-settings', component: AccountSettingComponent},
            {path: 'portafolio/:id', component: PortafolioComponent},
            {path: 'events', component: EventsComponent},
            {path: 'company', component: CompanyComponent},
            {path: 'phototips', component: PhototipsComponent},
            {path: 'contact', component: ContactComponent},
            {path: 'shop', component: ShopComponent},
            {path: '', redirectTo: '/home', pathMatch: 'full'},
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );