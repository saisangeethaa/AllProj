import { AbstractControl, ValidationErrors } from '@angular/forms';


 export function gtr10(cntrl:AbstractControl):ValidationErrors | null {

let frmCtrlVal= cntrl.value;

if (frmCtrlVal <= 10 ){

    return {'gtr10':false,'msg':'Value should be grater than 10'}
}
else{
    return null;
}

}