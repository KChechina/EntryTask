import {encoded, translations} from './data.js'

console.log("Let's rock")
//console.log(encoded, translations)

const uniqIds = new Set();

function decodeFields(encoded, translations){
    for (let key in encoded[i]){
        if (key.endsWith('Id') && !='groupId' && !='service' && !='formatSize' && !='ca'){
            for (let key in translations){
                if (key.includes(encoded[i].[key])){
                    encoded[i].[key] = [key];
                    uniqIds.add(encoded[i].key);
                }
            }
        }
    }
}

const decoded = new Map(encoded);

console.log(decoded)
