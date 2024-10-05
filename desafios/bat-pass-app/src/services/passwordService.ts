export default function generatePass(customCharacteres:string, customLength?:number) {
    let password:string = '';
    let passwordLength = customLength || 8;

    if(!customCharacteres) {
        for(let i = 0; i < passwordLength; i++) {
            const min = 32, max = 126;
            const randomCode = Math.floor(Math.random() * (max - min + 1) + min);
            const randomCharacter = String.fromCharCode(randomCode);
            password += randomCharacter;
        }
    }
    else {
        for(let i = 0; i < passwordLength; i++) {
            let random = Math.floor(Math.random() * customCharacteres.length);
            password += customCharacteres.charAt(random);
        }
    }

    return password;
}