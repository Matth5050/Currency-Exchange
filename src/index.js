import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import rateCheck from './js/rateCheck';

function getElements(response) {
    if (response.conversion_result) {
      $('.output').append(`<p>${response.conversion_result}</p>`);
      
    } else {
        $('.output').append(`<p>There was an error: ${response}</p>`);
    }
  }

async function makeApiCall(country1, country2, amount) {
    const response = await rateCheck.getRates(country1, country2, amount);
    console.log(response);
    getElements(response);
}

$(document).ready(function() {
    $('#form').submit(function() {
        const country1 = $('#currency1').val();
        const country2 = $('#currency2').val();
        const amount = $('#amount').val();
        makeApiCall(country1, country2, amount);
    });
  });