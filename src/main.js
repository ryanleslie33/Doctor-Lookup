import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
$("#form").submit(function(event){
  event.preventDefault();

  var api_key = '96f18561aaa75db4fdd9ef618242d8ae'; 

  var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + api_key;



  $.get(resource_url, function (data) {

      var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
      document.getElementById('content-placeholder').innerHTML = template(data);
  });





});


});
