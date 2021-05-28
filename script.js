window.addEventListener("DOMContentLoaded", function() {
  
    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");
    
    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      // status.innerHTML = "Thanks!";
      swal("Thanks!", "We will be in contact shortly!", "success");
    }
    
    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }
    
    // handle the form submission event
    
    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
    });
    
    // helper function for sending an AJAX request
    
    function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
    }  
      // Change style of navbar on scroll
      window.onscroll = function() {myFunction()};
      function myFunction() {
          var navbar = document.getElementById("myNavbar");
          if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
              navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
          } else {
              navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
          }
      }
      
      // Used to toggle the menu on small screens when clicking on the menu button
      function toggleFunction() {
          var x = document.getElementById("navDemo");
          if (x.className.indexOf("w3-show") == -1) {
              x.className += " w3-show";
          } else {
              x.className = x.className.replace(" w3-show", "");
          }
      }