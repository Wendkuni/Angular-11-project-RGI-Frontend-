"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var SupprimerCompte_component_1 = require("./pages/SupprimerCompte/SupprimerCompte.component");
var addCompte_component_1 = require("./pages/addCompte/addCompte.component");
var CompteUser_component_1 = require("./pages/CompteUser/CompteUser.component");
var MenuGestion_module_1 = require("./MenuGestion/MenuGestion.module");
var AuthInterceptor_service_1 = require("./shared/intercepte/AuthInterceptor.service");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var admin_lte_conf_1 = require("./admin-lte.conf");
var app_routing_module_1 = require("./app-routing.module");
var core_module_1 = require("./core/core.module");
var angular_admin_lte_1 = require("angular-admin-lte");
var app_component_1 = require("./app.component");
var angular_loading_page_1 = require("angular-loading-page");
var animations_1 = require("@angular/platform-browser/animations");
var localite_module_1 = require("./territoire/localite/localite/localite.module");
var HomePage_component_1 = require("./pages/HomePage/HomePage.component");
var forms_1 = require("@angular/forms");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var dialog_1 = require("@angular/material/dialog");
var icon_1 = require("@angular/material/icon");
var autocomplete_1 = require("@angular/material/autocomplete");
var button_1 = require("@angular/material/button");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var menu_1 = require("@angular/material/menu");
var snack_bar_1 = require("@angular/material/snack-bar");
var card_1 = require("@angular/material/card");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var tooltip_1 = require("@angular/material/tooltip");
var stepper_1 = require("@angular/material/stepper");
var select_1 = require("@angular/material/select");
var expansion_1 = require("@angular/material/expansion");
var grid_list_1 = require("@angular/material/grid-list");
var flex_layout_1 = require("@angular/flex-layout");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                core_module_1.CoreModule,
                angular_admin_lte_1.LayoutModule.forRoot(admin_lte_conf_1.adminLteConf),
                angular_loading_page_1.LoadingPageModule, angular_loading_page_1.MaterialBarModule, animations_1.BrowserAnimationsModule, localite_module_1.LocaliteModule,
                MenuGestion_module_1.MenuGestionModule,
                forms_1.FormsModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                dialog_1.MatDialogModule,
                icon_1.MatIconModule,
                autocomplete_1.MatAutocompleteModule,
                button_1.MatButtonModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                forms_1.ReactiveFormsModule,
                menu_1.MatMenuModule,
                snack_bar_1.MatSnackBarModule,
                card_1.MatCardModule,
                slide_toggle_1.MatSlideToggleModule,
                tooltip_1.MatTooltipModule,
                stepper_1.MatStepperModule,
                select_1.MatSelectModule,
                expansion_1.MatExpansionModule,
                grid_list_1.MatGridListModule,
                flex_layout_1.FlexLayoutModule,
                angular_admin_lte_1.LayoutModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                HomePage_component_1.HomePageComponent,
                CompteUser_component_1.CompteUserComponent,
                addCompte_component_1.AddCompteComponent,
                SupprimerCompte_component_1.SupprimerCompteComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [AuthInterceptor_service_1.authInterceptorProviders]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
