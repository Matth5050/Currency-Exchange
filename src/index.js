import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import rateCheck from './rateCheck.js';

function getElements(response) {
    if (response.result === "success") {
      console.log(`${response.conversion_result} `);
      
    } else {
      $('.showErrors').text(`There was an error: ${response}`);
    }
  }

async function makeApiCall(country1, country2, amount) {
    const response = await rateCheck.getRates(country1, country2, amount);
    console.log(response);
    getElements(response);
}

$(document).ready(function() {
    $('#btn').click(function() {
      console.log(makeApiCall(country1, country2, amount));
    });
  });