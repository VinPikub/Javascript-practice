let name = new Array(5);
name[0] = 'Sokina';
name[1] = 'Jorina';
name[2] = 'Rokeya';
name[3] = 'shohida';
name[4] = 'kulsuma';

document.write(name[0]);
document.write('\n');
document.write(name[1]);
document.write('\n');
document.write(name);
document.write('\n');
document.write('length of the string: ', name.length);

let same = ['rahim', 'karim', 'shafiq', 'jabbar'];
document.write('length of same: ', same.length);
document.write('\n');
same.push('Shuvo');
document.write(same);
same.pop();
document.write('\n');
document.write(same);
document.write('\n');

let combine = name.concat(same);
document.write(combine);