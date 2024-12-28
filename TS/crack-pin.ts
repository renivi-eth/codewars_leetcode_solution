/**
Дан md5-хэш пятизначного PIN-кода. Он задан как строка. Md5 — это функция для хэширования вашего пароля: "password123" ===> "482c811da5d5b4bc6d497ffa98491e38"
Почему это полезно? Хэш-функции, такие, как md5, могут создать хэш из строки за короткое время, и узнать пароль невозможно, если у вас есть только хэш.
Единственный способ — взломать его, то есть попробовать каждую комбинацию, хэшировать и сравнить с хешем, который вы хотите взломать. (Существуют и другие способы атаки на md5, но это уже другая история) Каждый веб-сайт и ОС хранят свои пароли в виде хэшей, поэтому если хакер получит доступ к базе данных, он ничего не сможет сделать, пока пароль достаточно безопасен.
 */

import * as crypto from 'node:crypto';

export function crack(pass: string): string {
  for (let i = 0; i < 100_000; i++) {
    const hypoPassword = String(i).padStart(5, '0');
    const hypoHash = crypto.hash('md5', hypoPassword);

    if (pass === hypoHash) {
      return hypoPassword;
    }
  }
}

// console.log(crack('827ccb0eea8a706c4c34a16891f84e7b')); // 12345
function testPadStart() {
  for (let i = 0; i < 100; i++) {
    const pass = String(i).padStart(5, '0');
    console.log(pass);

    const finalPass = '12345';

    if (pass === finalPass) {
      return pass;
    }
  }
}

console.log(testPadStart());
