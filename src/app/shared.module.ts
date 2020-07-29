import { NgModule } from '@angular/core';
import { HeaderModule } from './components/header/header.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { IdPipe } from './pipes/id.pipe';
import { TypesPipe } from './pipes/types.pipe';

@NgModule({
  declarations: [
    IdPipe,
    TypesPipe,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    HeaderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatDialogModule,
    IdPipe,
    TypesPipe,
  ]
})
export class SharedModule {}
