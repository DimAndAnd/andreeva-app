import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowmoreComponent } from './showmore/showmore.component';
import { PricesComponent } from './prices/prices.component';
import { AdministrativeLawComponent } from './Law-services/administrative-law/administrative-law.component';
import { CommercialLawComponent } from './Law-services/commercial-law/commercial-law.component';
import { ConsumerProtectionComponent } from './Law-services/consumer-protection/consumer-protection.component';
import { CriminalLawComponent } from './Law-services/criminal-law/criminal-law.component';
import { FamilyLawComponent } from './Law-services/family-law/family-law.component';
import { IntellectualPropertyLawComponent } from './Law-services/intellectual-property-law/intellectual-property-law.component';
import { LaborLawComponent } from './Law-services/labor-law/labor-law.component';
import { PublicProcurementComponent } from './Law-services/public-procurement/public-procurement.component';
import { SubscriptionServiceComponent } from './Law-services/subscription-service/subscription-service.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    {path: 'home', component: HomeComponent},
    {path: 'administrative-law', component: AdministrativeLawComponent},
    {path: 'commercial-law', component: CommercialLawComponent},
    {path: 'consumer-protection', component: ConsumerProtectionComponent},
    {path: 'criminal-law', component: CriminalLawComponent},
    {path: 'family-law', component: FamilyLawComponent},
    {path: 'intellectual-property-law', component: IntellectualPropertyLawComponent},
    {path: 'labor-law', component: LaborLawComponent},
    {path: 'public-procurement', component: PublicProcurementComponent},
    {path: 'subscription-service', component: SubscriptionServiceComponent},
    {path: 'show-more', component: ShowmoreComponent},
    {path: 'prices', component: PricesComponent},    
];
