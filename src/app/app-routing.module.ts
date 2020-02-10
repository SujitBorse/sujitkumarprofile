import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkComponent } from './work/work.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'work', component: WorkComponent},
    {path: 'contact', component: ContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingcomponents = [HomeComponent, ResumeComponent, WorkComponent, ContactComponent, NotFoundComponent]