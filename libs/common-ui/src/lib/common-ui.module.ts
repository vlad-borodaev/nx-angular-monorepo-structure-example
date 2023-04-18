import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner/banner.component';
import { MenuComponent } from './menu/menu/menu.component';
import { HeaderComponent } from './header/header/header.component';
import { SidePanelComponent } from './side-panel/side-panel/side-panel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BannerComponent,
    MenuComponent,
    HeaderComponent,
    SidePanelComponent,
  ],
  exports: [
    BannerComponent,
    MenuComponent,
    HeaderComponent,
    SidePanelComponent,
  ],
})
export class CommonUiModule {}
