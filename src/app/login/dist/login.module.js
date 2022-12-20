"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginModule = void 0;
var ForgetPassword_component_1 = require("./ForgetPassword/ForgetPassword.component");
var Inscription_component_1 = require("./Inscription/Inscription.component");
var card_1 = require("@angular/material/card");
var snack_bar_1 = require("@angular/material/snack-bar");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var button_1 = require("@angular/material/button");
var autocomplete_1 = require("@angular/material/autocomplete");
var icon_1 = require("@angular/material/icon");
var dialog_1 = require("@angular/material/dialog");
var table_1 = require("@angular/material/table");
var forms_1 = require("@angular/forms");
var Login_component_1 = require("./Login/Login.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var login_routing_1 = require("./login.routing");
var stepper_1 = require("@angular/material/stepper");
var select_1 = require("@angular/material/select");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var Infos_component_1 = require("./Inscription/Infos/Infos.component");
var grid_list_1 = require("@angular/material/grid-list");
var flex_layout_1 = require("@angular/flex-layout");
var layout_module_1 = require("../../../library/angular-admin-lte/src/lib/layout/layout.module");
var menu_1 = require("@angular/material/menu");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                login_routing_1.LoginRoutingModule,
                forms_1.FormsModule,
                table_1.MatTableModule,
                dialog_1.MatDialogModule,
                stepper_1.MatStepperModule,
                select_1.MatSelectModule,
                icon_1.MatIconModule,
                autocomplete_1.MatAutocompleteModule,
                button_1.MatButtonModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                forms_1.ReactiveFormsModule,
                snack_bar_1.MatSnackBarModule,
                card_1.MatCardModule,
                progress_spinner_1.MatProgressSpinnerModule,
                grid_list_1.MatGridListModule,
                flex_layout_1.FlexLayoutModule,
                layout_module_1.LayoutModule,
                menu_1.MatMenuModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule
            ],
            declarations: [Login_component_1.LoginComponent, Inscription_component_1.InscriptionComponent, ForgetPassword_component_1.ForgetPasswordComponent, Infos_component_1.InfosComponent]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
