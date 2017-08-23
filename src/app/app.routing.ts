import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnimalsComponent } from './animals/animals.component';
import { MedicalComponent } from './medical/medical.component';
import { EducationComponent } from './education/education.component';
import { CharityComponent } from './charity/charity.component';
import { ContactComponent } from './contact/contact.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CharityDetailComponent } from './charity-detail/charity-detail.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { MedicalDetailComponent } from './medical-detail/medical-detail.component';
import { AdminComponent }   from './admin/admin.component';


const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'charity',
    component: CharityComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'animals',
    component: AnimalsComponent
  },
  {
    path: 'medical',
    component: MedicalComponent
  },
  {
   path: 'animals/:id',
   component: AnimalDetailComponent
 },
 {
   path: 'charities/:id',
   component: CharityDetailComponent
 },
 {
   path: 'medicals/:id',
   component: MedicalDetailComponent
 },
 {
   path: 'educations/:id',
   component: EducationDetailComponent
 },
 {
  path: 'admin',
  component: AdminComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
