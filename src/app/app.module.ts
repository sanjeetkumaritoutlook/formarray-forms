import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
//import ReactiveFormsModule here
import { ReactiveFormsModule } from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';
import { FancybtnComponent } from './fancybtn/fancybtn.component';
import { ZippyComponent } from './zippy/zippy.component';
import { BigReactiveFormComponent } from './big-reactive-form/big-reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './services/users.service';
import { MyDirectiveDirective } from './my-directive.directive';
import { PasswordlengthdetectorDirective } from './passwordlengthdetector.directive';
import { MyFormComponent } from './my-form/my-form.component';
import { MyTypedFormComponent } from './my-typed-form/my-typed-form.component';
import { FormlyFormExampleComponent } from './formly-form-example/formly-form-example.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldCustomInputComponent } from './formly-field-custom-input/formly-field-custom-input.component';
import { RxjsPaginationComponent } from './rxjs-pagination/rxjs-pagination.component';
import { SignalsPaginationComponent } from "./signals-pagination/signals-pagination.component";
import { FormlyFullFormComponent } from './formly-full-form/formly-full-form.component';
registerLocaleData(localeFr);

const MaterialComponents = [
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
]
@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        ReactiveFormComponent,
        FormArrayComponent,
        FancybtnComponent,
        ZippyComponent,
        BigReactiveFormComponent,
        Form1Component,
        Form2Component,
        UsersComponent,
        MyDirectiveDirective,
        PasswordlengthdetectorDirective,
        MyFormComponent,
        MyTypedFormComponent,
        FormlyFormExampleComponent,
        FormlyFieldCustomInputComponent,
        FormlyFullFormComponent,
    ],
    exports: [
        MaterialComponents
    ],
    providers: [UsersService,
        { provide: LOCALE_ID, useValue: 'fr-FR' } // Provide the appropriate locale for each language
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyBootstrapModule,
        FormlyModule.forRoot({
            validationMessages: [{ name: 'required', message: 'This field is required' }],
            types: [{ name: 'custom', component: FormlyFieldCustomInputComponent, wrappers: ['form-field'] }],
        }),
        BrowserAnimationsModule,
        MaterialComponents,
        ListComponent,
        ListItemComponent,
        RxjsPaginationComponent, //standalone component insert in module.imports section in app.module.ts
        SignalsPaginationComponent
    ]
})
export class AppModule { }
