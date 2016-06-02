
var font_hebr = 'Times New Roman';
var font_text = 'Liberation sans';

var gStyleSheet;

function insertStyleSheet() {

  var style = document.createElement('style');
  style.type = 'text/css';

  document.head.appendChild(style);

}

function insertGlobalStyleSheet() {

  insertStyleSheet();

  gStyleSheet = document.styleSheets[0];
  gStyleSheet.insertRule(' * {font-family: ' + font_text + '}', 0);

}

function addCssRule(rule) {
  gStyleSheet.insertRule(rule, 0);
}
