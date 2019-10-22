let resText;
function getQuote () {
  return new Promise((resolve, reject) => {
    fetch('https://www.sws.bfh.ch/~locher/js/services/quote.php').then(resp => {
      if(resp.ok) {
        resolve(resp.text());
      } else {
        reject(new Error('error'))
      }
    }, error => {
      reject(new Error(error.message));
    })
  })
}

function toMorse (text) {
    resText = text;
    return new Promise(((resolve, reject) => {
      fetch('https://www.sws.bfh.ch/~locher/js/services/morse.php?text='+text).then(resp => {
        if(resp.ok) {
          resolve(resp.text());
        } else {
          reject(new Error('error'));
        }
      }, error => {
        reject(new Error(error.message))
      })
    }))
}

function getText() {
  getQuote()
    .then(toMorse)
    .then((response) => document.querySelector('.quotes').innerHTML += resText + '<br/>' + response + '<br/>')
    .catch(error => {
      document.querySelector('.errors').innerHTML += error + "<br/>"
    });
}

function init() {
  for (let i = 0; i < 4; i++) {
    getText();
  }
}
