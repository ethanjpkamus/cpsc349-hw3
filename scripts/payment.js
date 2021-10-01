/* eslint-disable no-undef */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-ternary */
/* eslint-disable multiline-ternary */
(function (window) {
  'use strict';
  var App = window.App;
  var FormHandler = App.FormHandler;
  // var $ = window.jQuery;

  var PAYMENT_FORM_SELECTOR = '[coffee-payment="form"]';

  var payFormHandler = new FormHandler(PAYMENT_FORM_SELECTOR);
  payFormHandler.addSubmitHandler(function (data) {
    var thanks = 'Thank you' + (data.title ?  ' ' + data.title : '') + ' ' + data.username + ' for your order!';
    var thanksMessage = $('#thank-statement');
    thanksMessage.html(thanks);
    thanksMessage.modal();
    // eslint-disable-next-line no-unused-vars
    thanksMessage.on($.modal.AFTER_CLOSE, function (event, modal) {
      location.replace('/');
    });
  });

  console.log(payFormHandler); 
})(window);