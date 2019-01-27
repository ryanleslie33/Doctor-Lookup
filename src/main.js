import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from 'C:/Users/ryan leslie/Desktop/Doctor-Lookup/src/doctor.js';

$(document).ready(function() {

  $("#form").submit(function(event){
    event.preventDefault();
    let input = $('#inputName').val();
    $('#inputName').val("");


        let weatherService = new Doctor();
        let promise = weatherService.findDoctor(input);
        promise.then(function(response) {

        if(response.data.length == 0){
          document.getElementById('content-placeholder').innerHTML = "there are no doctors matching your criteria";
        } else {

          var doctor = Handlebars.compile(document.getElementById('docs-template').innerHTML);
          document.getElementById('content-placeholder').innerHTML = doctor(response) ;
        }
},

    function(error) {
      if(error.responseJSON.meta.message){
        console.log(error.responseJSON.meta.message);
        document.getElementById('content-placeholder').innerHTML = error.responseJSON.meta.message;
      }
    });

});
// $("#issues").submit(function(event){
//   event.preventDefault();
//   let inputCondition = $('#conditions').val();
//     $('#conditions').val("");
//
//   var resource_url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${inputCondition}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
//
//   $.get(resource_url, function (data) {
//
//       var template = Handlebars.compile(document.getElementById('conditions-template').innerHTML);
//       document.getElementById('content-placeholder').innerHTML = template(data);
//   });
// });
});
