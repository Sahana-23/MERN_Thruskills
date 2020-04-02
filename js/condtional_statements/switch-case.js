var programmingLang = 'python';
switch (programmingLang) {
    case  'js':
        console.log('Learning JS');
    break;

    case 'java': 
        console.log('Learning Java');
    break;

    case 'python':
        console.log('Learning Python')
    break;

    default : 
        console.log('Invalid lang name');
    break;

}

//fallthrough

var x=0;
var vowel='e';

switch(vowel){
    case 'a': x++;
    case 'e': x++;
    case 'i': x++;
    break;
    case 'o': x++;
    case 'u': x++;
    default: x++;
}

console.log(x);