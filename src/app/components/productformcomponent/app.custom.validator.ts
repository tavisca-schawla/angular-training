import { AbstractControl } from "@angular/forms";
  
export class CustomValidator {
     static checkIfStartsFromUppercase(ctrl:AbstractControl):any {
        let value = ctrl.value.toString();
        if(value.charAt(0) === value.charAt(0).toUpperCase()){
            return null;
        } else {
            return {
                startsWithUpperCase:false    
            };
        }
     }

     static checkIfIsPositiveInteger(ctrl:AbstractControl):any {
        let value = parseInt(ctrl.value);
        if(value > 0){
            return null;
        } else {
            return {
                isPositiveInteger:false    
            };
        }
     }
}