import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ContainerComponent } from './components/Container/Container.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './components/polar-area-chart/polar-area-chart.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserPictureComponent } from './components/user-picture/user-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    UserPictureComponent,
    ContainerComponent,
    BarChartComponent,
    PolarAreaChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    LineChartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
