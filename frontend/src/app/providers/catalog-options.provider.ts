import { InjectionToken } from "@angular/core";
import { CatalogOptions } from "../models/catalog-options";

export const catalogOptionsProvider = new InjectionToken<CatalogOptions>('catalogOptions');