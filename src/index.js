import './stylesheets/main.scss';
import _ from 'lodash';

window.onload = () => {
  const validateEmail = email => {
    //regular expression to test valid email structure
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexEmail.test(email);
  }

  const stringCompare = (string1, string2) => {
    if(string1 === string2) {
      return true;
    }

    return false;
  }

  //get label for input
  const getLabel = elem => {
    return elem.nextSibling.nextSibling;
  }

  //form validation
  document.querySelector('.i-form').addEventListener('submit', function(e) {
    //prevent default submission
    e.preventDefault();
    const firstName = e.target.querySelector('#first-name');
    const lastName = e.target.querySelector('#last-name');
    const email = e.target.querySelector('#email');
    const password = e.target.querySelector('#password');
    const confirmPassword = e.target.querySelector('#confirm-password');

    if(firstName.value === '') {
      getLabel(firstName).innerHTML = "Enter a first name";
      getLabel(firstName).style.color = 'red';
    }

    if(lastName.value === '') {
      getLabel(lastName).innerHTML = "Enter a last name";
      getLabel(lastName).style.color = 'red';
    }

    if(email.value === '') {
      getLabel(email).innerHTML = "Enter a email address";
      getLabel(email).style.color = 'red';
    } else if (!validateEmail(email.value)) {
      getLabel(email).innerHTML = "Enter a valid email address";
      getLabel(email).style.color = 'red';
    }

    if(password.value === '') {
      getLabel(password).innerHTML = "Enter a password";
      getLabel(password).style.color = 'red';
    }

    if(confirmPassword.value !== password.value) {
      getLabel(confirmPassword).innerHTML = "Passwords do not match";
      getLabel(confirmPassword).style.color = 'red';
    }


  });

  document.querySelector('.i-nav-mobile-trigger').addEventListener('click', function() {
    this.parentNode.classList.toggle('active');
  });

  document.querySelector('.i-dropdown').addEventListener('click', function() {
    this.classList.toggle('active');
  });

}
