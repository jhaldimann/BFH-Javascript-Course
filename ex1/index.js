const alphabetString = 'a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;' +
  'm=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;' +
  'y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..;!=-.-.--';

let charToMorseCode = (input) => {
  let output = alphabetString.match(input+'=[-./]*');
  return output[0].substring(2);
};

let convertToMorseCode = (input) => {
  let output = '';
  for(let i = 0; i <= input.length; i++) {
    output += charToMorseCode(input.charAt(i))
  }
  return output;
};

console.log(convertToMorseCode('hello'));
console.log(charToMorseCode('a'));
