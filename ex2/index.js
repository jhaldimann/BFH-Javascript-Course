function Char(value, string) {
  this.string = string;
  this.value = value;
  return this;
}

function Font(name, chars) {
  this.name = name;
  let alphabet = new Map();

  chars.forEach((element) => {
    alphabet.set(element.value, element.string);
  });

  this.alphabet = alphabet;

  return this;
}

Font.prototype.write = (text, to) => {
  if (typeof to !== 'function') {
    console.log(this.render(text));
  } else {
    to(this.render(text));
  }
};

Font.prototype.render = (text) => {
  let output = '';
  for (let i = 0; i < text.length; i++) {
    output += this.alphabet.get(text.charAt(i));
    output += ' ';
  }
  return output;
};

function createFontArray(string){
  let input = string.split(';');
  let output = [input.length];
  for(let i = 0; i < input.length; i++){
    let splitted = input[i].split('=');
    output[i] =new Char(splitted[0], splitted[1]);
  }
  return output;
}

let alphabetString = 'a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;' +
  'm=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;' +
  'y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..;!=-.-.--';

let morseFont = new Font('MorseFont',createFontArray(alphabetString));

morseFont.write('Julian','');

morseFont.render = (text) => {
  let output = '';
  for (let i = 0; i < text.length; i++) {
    output += this.alphabet.get(text.charAt(i));
    output += '/';
  }
  return output;
};
