import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
$("#form").submit(function(event){
  event.preventDefault();
  const input = $('#inputName').val();
    $('#inputName').val("");

  var apiKey = '96f18561aaa75db4fdd9ef618242d8ae';

  var resource_url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${input}&location=45.5122,-122.6587,100&skip=2&limit=10&user_key=${apiKey}`;

// var doctor_uid = '333d4bb6fcf640e18e93b11b00fe09eb';
  // var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors/'+ doctor_uid + '?user_key=' + api_key;

  $.get(resource_url, function (data) {

    var body = jQuery.parseJSON(JSON.stringify(data));
      var doctor = Handlebars.compile(document.getElementById('docs-template').innerHTML);
      document.getElementById('content-placeholder').innerHTML = doctor(body) ;
        // document.getElementById('content-placeholder').innerHTML = doctor(data.practices) ;

        // var address = Handlebars.compile(document.getElementById('docs-address').innerHTML);
        // document.getElementById('content-address').innerHTML = address(data.data.visit_address) ;
      });









});
$("#issues").submit(function(event){
  event.preventDefault();
  var api_key = '96f18561aaa75db4fdd9ef618242d8ae'; // Get your API key at developer.betterdoctor.com
  var resource_url = 'https://api.betterdoctor.com/2016-03-01/conditions?user_key=' + api_key;
  $.get(resource_url, function (data) {
      // data: { meta: {<metadata>}, data: {<array[Condition]>} }

      var template = Handlebars.compile(document.getElementById('conditions-template').innerHTML);
      document.getElementById('content-placeholder').innerHTML = template(data.uid);
  });
});
});
