import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Doctor} from './doctor.js';
$(document).ready(function() {
  var apiKey = '96f18561aaa75db4fdd9ef618242d8ae';
$("#form").submit(function(event){
  event.preventDefault();
  let input = $('#inputName').val();
    $('#inputName').val("");

    let doctor = new Doctor();
    let promise = doctor.findDoctor(input);

  var resource_url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${input}&location=45.5122,-122.6587,100&skip=2&limit=10&user_key=${apiKey}`;


  $.get(resource_url, function (data) {

    var body = jQuery.parseJSON(JSON.stringify(data));
      var doctor = Handlebars.compile(document.getElementById('docs-template').innerHTML);
      document.getElementById('content-placeholder').innerHTML = doctor(body) ;

      });









});
$("#issues").submit(function(event){
  event.preventDefault();
  let inputCondition = $('#conditions').val();
    $('#conditions').val("");

  var resource_url = `https://api.betterdoctor.com/2016-03-01/practices?query=${inputCondition}&doctors=?&skip=2&limit=10&user_key=${apiKey}`;

  $.get(resource_url, function (data) {

  var body = jQuery.parseJSON(JSON.stringify(data));
      var template = Handlebars.compile(document.getElementById('conditions-template').innerHTML);
      document.getElementById('content-placeholder').innerHTML = template(body);
  });
});
});
