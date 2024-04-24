import {encoded, translations} from './data.js'

console.log("Let's rock")
//console.log(encoded, translations)

const uniqIds = new Set();

function decodeFields(encoded, translations){
    for (let item of encoded){
        for (let key in item){
            if (key.includes('Id') && (key != 'groupId') && (key != 'service') && (key !='formatSize') && (key != 'ca')){
                for (let key in translations){                                       
                    if (key.includes(item[key])){
                        item[key]= [key];
                        uniqIds.add(item.key);
                        encoded.Map()
                        return [encoded, uniqIds];
                    }
                }
            }
        }
    }
}
const decoded = new Map(decodeFields);

console.log(decoded)
