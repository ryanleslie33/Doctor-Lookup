import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './doctor.js';

$(document).ready(function() {

  $("#form").submit(function(event) {
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
});
