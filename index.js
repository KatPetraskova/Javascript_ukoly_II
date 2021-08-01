'use strict';
/*
const triangleArea = (width, height) => {
    return (width * height) / 2;
};

const vysledek = triangleArea(3, 4);
console.log(vysledek);

const isPasswordSafe = (password) => {
    if (password.length > 12) {
        return true;
    } else {
        return false;
    }
};

console.log(isPasswordSafe('moje super bezpečné heslo'));

// zaokrouhlení na 2 desetin.místa:
const zaokrouhliNaDveDes = (cislo) => {
    return Math.round(cislo * 100) / 100;     125.123 > 12512.3 > 12512 > 125.12
};
*/

/*
const zaokrouhli = (cislo, desetinnychMist) => {
 const nasobitel = 10 ** desetinnychMist;
 return Math.round(cislo * nasobitel) / nasobitel;
};

console.log(zaokrouhli(123456.1564, 2));

const zmenTextVElementu = (selektor, novyText) => {
    const element = document.querySelector(selektor);
    if (element) {
        element.textContent = novyText;
    } else {
        console.warn(`Could not find element with selector ${selektor}`);
    }
};

zmenTextVElementu('#test', 'nova hodnota');


// obsah elipsy:
/*

const konstantaPi = Math.PI;

console.log(konstantaPi);

const height = prompt('Zadejte výšku:');
const width = prompt('Zadejte šířku:');

const ellipseArea = (width, height, konstantaPi) => {
    return ((height / 2) * (width / 2) * konstantaPi)
};

const vypocet = ellipseArea(width, height, konstantaPi);

console.log(vypocet);
*/

// max ze 2 čísel:
/*
const prvniCislo = Number(prompt('Zadejte první číslo:'));
const druheCislo = Number(prompt('Zadejte druhé číslo:'));

// const a = Number(prvniCislo);
// const b = Number(druheCislo);

// console.log(a);
// console.log(b);

const maxFunkce = (prvniCislo, druheCislo) => {
    if (prvniCislo > druheCislo) {
        return prvniCislo;
    } else if (prvniCislo === druheCislo) {
        return (console.log(prvniCislo + ' = ' + druheCislo));
    } else {
        return druheCislo;
    }
};

const porovnani = maxFunkce(prvniCislo, druheCislo);
console.log(porovnani);
*/

// kontrola DIČ

const inputStr = prompt('Zadejte své DIČ:')
const prefixTrim = inputStr.trim ();
const prefix = prefixTrim.slice(0, 3);
const digits = prefixTrim.slice(2);

const isDIC = (inputStr) => {
    if (inputStr.length < 11) {
        return false;
    } else if (inputStr.length > 12) {
        return false;
    } else if (prefix.indexOf('cz') === '-1') {
        return false;
    } else if (digits.isInt === false) {
        return false;
    } else {
        return true;
    };        
};

const testDIC = isDIC(inputStr);
console.log(testDIC);