/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
(function (win, doc) {
  'use strict';
  var $input = doc.querySelector('input');
  var $btnIgualdade = doc.querySelector('[data-js="btn-igualdade"]');
  var $btnCe = doc.querySelector('[data-js="btn-ce"]');
  
  var $btnAdicao = doc.querySelector('[data-js="btn-adicao"]');
  var $btnSubtracao = doc.querySelector('[data-js="btn-subtracao"]');
  var $btnMultiplicacao = doc.querySelector('[data-js="btn-multiplicacao"]');
  var $btnDivisao = doc.querySelector('[data-js="btn-divisao"]');
  
  var $btnZero = doc.querySelector('[data-js="btn-0"]');
  var $btnUm = doc.querySelector('[data-js="btn-1"]');
  var $btnDois = doc.querySelector('[data-js="btn-2"]');
  var $btnTres = doc.querySelector('[data-js="btn-3"]');
  var $btnQuatro = doc.querySelector('[data-js="btn-4"]');
  var $btnCinco = doc.querySelector('[data-js="btn-5"]');
  var $btnSeis = doc.querySelector('[data-js="btn-6"]');
  var $btnSete = doc.querySelector('[data-js="btn-7"]');
  var $btnOito = doc.querySelector('[data-js="btn-8"]');
  var $btnNove = doc.querySelector('[data-js="btn-9"]');

  var inputValue = function () {
    var numbers = $input.value.match(/\d+/g);
    var signals = $input.value.match(/\D+/g);
    return {numbers, signals};
  };
  $btnIgualdade.addEventListener('click', function () {
    //$input.value = inputValue();
    console.log(inputValue());
  }, false);
  $btnCe.addEventListener('click', function () {
    return $input.value = 0;
  }, false);

  $btnZero.addEventListener('click', function () {
    $input.value === '0' ? $input.value = $btnZero.value : $input.value += $btnZero.value;
  }, false);
  $btnUm.addEventListener('click', function () {
    $input.value === '0' ? $input.value = $btnUm.value : $input.value += $btnUm.value;
  }, false);
  $btnDois.addEventListener('click', function () {
    $input.value === '0' ? $input.value = $btnDois.value : $input.value += $btnDois.value;
  }, false);
  $btnTres.addEventListener('click', function () {
    $input.value === '0' ? $input.value = $btnTres.value : $input.value += $btnTres.value;
  }, false);
  $btnQuatro.addEventListener('click', function () {
    $input.value === '0' ? $input.value = $btnQuatro.value : $input.value += $btnQuatro.value;
  }, false);
  $btnCinco.addEventListener('click', function () {
    $input.value === '0' ? $input.value = $btnCinco.value : $input.value += $btnCinco.value;
  }, false);
  $btnSeis.addEventListener('click', function () {
    $input.value === '0' ? $input.value = $btnSeis.value : $input.value += $btnSeis.value;
  }, false);
  $btnSete.addEventListener('click', function () {
    $input.value === '0' ? $input.value = $btnSete.value : $input.value += $btnSete.value;
  }, false);
  $btnOito.addEventListener('click', function () {
    $input.value === '0' ? $input.value = $btnOito.value : $input.value += $btnOito.value;
  }, false);
  $btnNove.addEventListener('click', function () {
    $input.value === '0' ? $input.value = $btnNove.value : $input.value += $btnNove.value;
  }, false);

  $btnAdicao.addEventListener('click', function() {
    $input.value += $btnAdicao.value;
  }, false);
  $btnSubtracao.addEventListener('click', function() {
    $input.value += $btnSubtracao.value;
  }, false);
  $btnMultiplicacao.addEventListener('click', function() {
    $input.value += $btnMultiplicacao.value;
  }, false);
  $btnDivisao.addEventListener('click', function() {
    $input.value += $btnDivisao.value;
  }, false); 
})(window, document);