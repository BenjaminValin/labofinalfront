import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export type FormGroupDef = {[key: string]: AbstractControl};

export const MEDIA_FORM_CREATE: FormGroupDef = {
    name: new FormControl("", [ Validators.required ]),
    description: new FormControl("", [ Validators.required ]),
    insertDate: new FormControl(null),
    updateDate: new FormControl(null),
    expirationDate: new FormControl(null),
    datemodif: new FormControl(null),
    price: new FormControl(0),
    quantity: new FormControl(0),
    imagePath: new FormControl(null),
    TVA: new FormControl(0),
    categories: new FormControl(0, [Validators.required, Validators.min(1)]),
    supplier: new FormControl(0, [Validators.required, Validators.min(1)]),
}