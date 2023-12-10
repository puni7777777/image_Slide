const fs = require('fs');
let dir = "./pics/"      //path directory
const name = fs.readdirSync(dir);      // console.log(name);
let file_var = "file_name"    //variable name of array of names of files in the folder
let arr_imports = "";
let arr_exports = "";

for (let i = 0; i < name.length; i++) {
    try {
        arr_imports += `import p${i + 1} from '${dir}${name[i]}' \n`; //import statements
    } catch (err) {
        console.error(`Failed to import ${dir}${name[i]}:`, err);
    }
}

arr_exports += `const ${file_var} = [`; //array initialization

for (let i = 0; i < name.length; i++) {
    arr_exports += ` p${i + 1} ,`;
}

arr_exports += `]\n`;
arr_exports += `export default ${file_var}`;

let arr = arr_imports + arr_exports;

try {
    fs.writeFileSync('./File_imports.js', arr);
} catch (err) {
    console.error(`Failed to write file:`, err);
}

console.log('Files imported Successfully...');
