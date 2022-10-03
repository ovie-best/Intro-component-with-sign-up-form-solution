'use strict';

const form = document.querySelector('form');
const first_name = document.querySelector('#first_name');
const last_name = document.querySelector('#last_name');
let email = document.querySelector('#email');
const password = document.querySelector('#password');

const first_name_error = document.querySelector('.first_name_error');
const first_name_error_msg = document.querySelector('.first_name_error_msg');

const last_name_error = document.querySelector('.last_name_error');
const last_name_error_msg = document.querySelector('.last_name_error_msg');

const email_error = document.querySelector('.email_error');
const email_error_msg = document.querySelector('.email_error_msg');

const password_error = document.querySelector('.password_error');
const password_error_msg = document.querySelector('.password_error_msg');

const submit_button = document.querySelector('input[type="submit"]');

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const submit_form = (e) => {
    e.preventDefault();

    // FIRST NAME VALIDATION
    if (first_name.value == '') {
        first_name.classList.add('error');
        first_name_error.classList.add('show');
        first_name_error_msg.classList.add('show');
        first_name_error_msg.textContent = "First Name cannot be empty";
    } else {
        first_name.classList.remove('error');
        first_name_error.classList.remove('show');
        first_name_error_msg.classList.remove('show');
        first_name_error_msg.textContent = " ";
    }

    // LAST NAME VALIDATION
    if (last_name.value == '') {
        last_name.classList.add('error');
        last_name_error.classList.add('show');
        last_name_error_msg.classList.add('show');
        last_name_error_msg.textContent = "Last Name cannot be empty";
    } else {
        last_name.classList.remove('error');
        last_name_error.classList.remove('show');
        last_name_error_msg.classList.remove('show');
        last_name_error_msg.textContent = " ";
    }

    // EMAIL VALIDATION
    if (email.value == '') {
        email.classList.add('error');
        email_error.classList.add('show');
        email_error_msg.classList.add('show');
        email_error_msg.textContent = "Email cannot be empty";
    } else if (!validateEmail(email.value)) {
        email.classList.add('error');
        email_error.classList.add('show');
        email_error_msg.classList.add('show');
        email_error_msg.textContent = "Looks like this is not an email";
        console.log('invalid email')
    }else {
        email.classList.remove('error');
        email_error.classList.remove('show');
        email_error_msg.classList.remove('show');
        email_error_msg.textContent = " ";
    }

    // PASSWORD VALIDATION
    if (password.value == '') {
        password.classList.add('error');
        password_error.classList.add('show');
        password_error_msg.classList.add('show');
        password_error_msg.textContent = "Password cannot be empty";
    } else {
        password.classList.remove('error');
        password_error.classList.remove('show');
        password_error_msg.classList.remove('show');
        password_error_msg.textContent = " ";
    }
}

form.addEventListener('submit', submit_form);