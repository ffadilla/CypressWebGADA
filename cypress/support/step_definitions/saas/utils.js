import * as uomIdMap from "../../resources/saas/development-uomNameToIdMapping.json";
const uomObj = uomIdMap.data;

export function retrieveUomId(uomName) {
    for (let i=0; i < uomObj.length; i++ ) {
        if (uomObj[i].long_name === uomName){
            return uomObj[i].id;
        }
    }
}

export function generateRandomNumber() {
    let random = Math.floor(100000000 + Math.random() * 900000000);
    return "8" + random + "";
}

export function generateCurrentDateOTP() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    return mm+dd;
}

export function  generateRandomString(length) {
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result;
}

export function convertOrdinalToCardinalNumber(input) {
    input = input.substring(0, input.length-2);
    input = parseInt(input) - 1;
    return input.toString();
}