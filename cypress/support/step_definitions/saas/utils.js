import * as uomIdMap from "../../resources/saas/development-uomNameToIdMapping.json";

// const uomObj = JSON.parse(uomIdMap).data;
const uomObj = uomIdMap.data;

export function retrieveUomId(uomName) {
    for (let i=0; i < uomObj.length; i++ ) {
        if (uomObj[i].long_name === uomName){
            return uomObj[i].id;
        }
    }

}
