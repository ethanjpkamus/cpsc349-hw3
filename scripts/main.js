(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var truck = new Truck('ncc-1701', new DataStore());
  window.truck = truck;

  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(truck.deliverOrder.bind(truck));

  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(function(data) { 
      truck.createOrder.call(truck, data); //adds user info
      checkList.addRow.call(checkList, data);
  });

  console.log(formHandler); 
})(window);
