import { NgModule } from '@angular/core';
import { NewTeamComponent } from './new-team.component';
import { SharedModule } from '../../shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  component: NewTeamComponent,
}];

@NgModule({
  declarations: [NewTeamComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class NewTeamModule {}
