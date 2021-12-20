class PasswordGenerator {
  result: HTMLSpanElement;
  length: HTMLInputElement;
  uppercase: HTMLInputElement;
  lowercase: HTMLInputElement;
  numbers: HTMLInputElement;
  symbols: HTMLInputElement;
  number: number;

  constructor() {
    this.result = document.querySelector('.result');
    this.length = document.querySelector('#length');
    this.uppercase = document.querySelector('#uppercase');
    this.lowercase = document.querySelector('#lowercase');
    this.numbers = document.querySelector('#numbers');
    this.symbols = document.querySelector('#symbols');
    this.number = parseInt(this.length.value);
  }

  generate() {
    this.result.innerHTML = '';
    for (let c = 0; c < this.number; c++) {
      this.result.innerText += this.getRandomChar(this.lowercase.checked, this.uppercase.checked, this.numbers.checked, this.symbols.checked);
    }
    this.result.innerText = this.result.innerText.slice(0, this.number);
  }

  getRandomChar(lower: boolean, upper: boolean, number: boolean, symbol: boolean) {
    let result = '';
    if (lower) {
      result += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    if (upper) {
      result += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    if (number) {
      result += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    if (symbol) {
      result += String.fromCharCode(Math.floor(Math.random() * 33) + 33);
    }
    return result;
  }
}

function gerarSenha() {
  const passwordGenerator = new PasswordGenerator();
  if (this.number <= 0) return;
  passwordGenerator.generate();
}

function copyClipboard() {
  const passwordGenerator = new PasswordGenerator();
  navigator.clipboard.writeText(passwordGenerator.result.innerText);
  alert('Copiado para a área de transferência!');
}
