import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormTestComponent } from './form-test/form-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing.module';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoganComponent } from './logan/logan.component';
import { HttpClientModule } from '@angular/common/http';
import { fakeHttpProvider } from './fake-http.interceptor';
import { NgxProgressModule } from '../../../lib/src/lib/ngx-progress.module';

@NgModule({
  declarations: [AppComponent, FormTestComponent, LoganComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    NgxProgressModule,
  ],
  providers: [fakeHttpProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}