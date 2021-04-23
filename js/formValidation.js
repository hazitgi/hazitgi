$(document).ready(function () {
  $("#registration_form").validate({
    rules: {
      Name: {
        required: true,
        minlength: 3,
      },
      Mobile: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
      },
      Email: {
        required: true,
        email: true,
      },
      Message: {
        required: true,
        minlength: 20,
      },
    },
    messages: {
      Mobile: {
        required: "Please Enter Your Mobile Number",
        minlength: "Mobile Number must have 10 digit",
        digits: "Mobile Number must have numeric digit",
      },
      Name: {
        required: "Please Enter Your Name",
      },
      Message: {
        required: "Please Enter Your Messege",
      },
    },
    submitHandler: function () {
      $.ajax({
        url:
          "https://script.google.com/macros/s/AKfycbwePqyv_qulb3qfamU7rIy8xiQQ8j96nlAVOPBZtOtwbAexfi_0Qbi8nP7b3Bd979g/exec",
        data: $("#registration_form").serialize(),
        method: "post",
        success: function (response) {
          alert("Form submitted successfully");
          window.location.reload();
          //window.location.href="https://google.com"
        },
        error: function (err) {
          alert("Something Error");
        },
      });
    },
  });
});
