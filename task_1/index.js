import {encoded, translations} from './data.js'

console.log("Let's rock")
//console.log(encoded, translations)

const uniqIds = new Set();

function decodeFields(encoded, translations) {
    return encoded.map((data) => (
    Object.entries(data).reduce((acc, [key, value]) => {

        if (key.endsWith('Id') && !['groupId', 'service', 'formatSize', 'ca'].includes(key)) {
            uniqIds.add(Number(value));
            acc[key] = translations[value] ?? value;
        } else {
        acc[key] = value;
        }

        return acc;
    }, {})
    ));
}

const decoded = decodeFields(encoded, translations);

console.log('decoded: ', decoded);
console.log('uniqIds: ', uniqIds);

