import {Component} from '@angular/core';

import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
    selector: 'currency-cell',
    template: `{{params.value | currency:'USD'}}`
})
// tslint:disable-next-line:component-class-suffix
export class CurrencyRenderer implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    refresh(): boolean {
        return false;
    }
}