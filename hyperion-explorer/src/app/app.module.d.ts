import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginationService } from './services/pagination.service';
export declare class CustomPaginator extends MatPaginatorIntl {
    private pagService;
    constructor(pagService: PaginationService);
}
export declare class AppModule {
}
