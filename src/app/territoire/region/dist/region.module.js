"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegionModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var region_component_1 = require("./region.component");
var region_routing_1 = require("./region.routing");
var forms_1 = require("@angular/forms");
var table_1 = require("@angular/material/table");
var dialog_1 = require("@angular/material/dialog");
var icon_1 = require("@angular/material/icon");
var autocomplete_1 = require("@angular/material/autocomplete");
var button_1 = require("@angular/material/button");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var menu_1 = require("@angular/material/menu");
var snack_bar_1 = require("@angular/material/snack-bar");
var ajouter_component_1 = require("./ajouter/ajouter.component");
var paginator_1 = require("@angular/material/paginator");
var Supprimer_component_1 = require("./Supprimer/Supprimer.component");
var kendo_angular_excel_export_1 = require("@progress/kendo-angular-excel-export");
var RegionModule = /** @class */ (function () {
    function RegionModule() {
    }
    RegionModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                region_routing_1.RegionRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                dialog_1.MatDialogModule,
                icon_1.MatIconModule,
                autocomplete_1.MatAutocompleteModule,
                button_1.MatButtonModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                menu_1.MatMenuModule,
                snack_bar_1.MatSnackBarModule,
                kendo_angular_excel_export_1.ExcelExportModule
            ],
            declarations: [region_component_1.RegionComponent, ajouter_component_1.AjouterComponent, Supprimer_component_1.SupprimerComponent]
        })
    ], RegionModule);
    return RegionModule;
}());
exports.RegionModule = RegionModule;
