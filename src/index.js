import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RateCheck from './js/rates.js';

function getElements(response) {
  if (response.result) {
    $('#test').text(`The test is as follows ${response.conversion_rates}`);
    
  } else {
    $('#test2').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await RateCheck.getRate();
  getElements(response);
}

$(document).ready(function() {
  $('#form').click(function() {
   
    makeApiCall('USD', 'EUR', 5);
  });
});