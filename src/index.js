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