import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'ng-option',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<ng-content></ng-content>`
})
export class NgOptionComponent implements OnChanges {

    @Input() value: any;
    @Input()
    get disabled() { return this._disabled; }
    set disabled(value: any) { this._disabled = this._isDisabled(value) }

    @Input()
    get hasChild() { return this._hasChild; }
    set hasChild(value: any) { this._hasChild = value }

    readonly stateChange$ = new Subject<{ value: any, disabled: boolean }>();
    private _disabled = false;
    private _hasChild = false;

    constructor(public elementRef: ElementRef) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.disabled) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
            });
        }
    }

    private _isDisabled(value) {
        return value != null && `${value}` !== 'false';
    }

    
}
