import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [MatCardModule, MatToolbarModule, MatIconModule, MatSidenavModule],
  exports: [MatCardModule, MatToolbarModule, MatIconModule, MatSidenavModule],
})
export class MaterialModule {}
