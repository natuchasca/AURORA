
$(document).ready(function () {


  // var onRecaptchaSuccess = function (token) {

  //   $('.mensaje_error').css({
  //     display: 'none'
  //   });

  // }

  // var onloadCallback = function () {

  //   grecaptcha.render('recaptcha_evento', {
  //     'sitekey': '6LfR8GMhAAAAAKiwqqQC-hXyD3K2tcZMDnZbDZ6m',
  //     'callback': onRecaptchaSuccess
  //   });

  // };



  setTimeout(() => {
    // onloadCallback();
  }, 1000);


  $("#submit-evento").click(function () {

    $("#email-form-e").validate({
      rules: {

        Nombre: {
          required: true,
        },

        Apellido: {
          required: true,
        },

        contacto_email: {
          required: true,
          email: true,
        }
      },
      messages: {

        Nombre: {
          required: "<label style='color: #e6576a; text-align: left; font-size: 10px'>* Campo Requerido</label>"
        },
        Apellido: {
          required: "<label style='color: #e6576a; text-align: left; font-size: 10px''>* Campo Requerido</label>",
        },
        contacto_email: {
          required: "<label style='color: #e6576a; text-align: left; font-size: 10px''>* Campo Requerido</label>",
          email: "<label style='color: #e6576a; text-align: left; font-size: 10px''>* Email incorrecto</label>"
        },

      }
    });

    var $valid = $("#email-form-e").valid();


    // var recaptchaValue = grecaptcha.getResponse();

    // if (!recaptchaValue) {
    //   $('.mensaje_error').css({
    //     display: 'flex',
    //     color: '#e6576a',
    //     textAlign: "left !important",
    //     marginTop: "10px",
    //     fontWeight: 'bold'
    //   });

    //   $('.mensaje_error').text('Por favor, completa el reCAPTCHA.');

    //   return;
    // }


    if (!$valid) {
      return false;
    }

    var data = {

      nombre: $("#contacto_nombre").val(),
      institucion: $("#contacto_institucion").val(),
      cargo: $("#contacto_cargo").val(),
      correo: $("#contacto_email").val(),
      apellido: $("#contacto_apeliido").val(),
    };

    $.post("./eventos.php", data, function (response) {

      console.log(response);

      var j = JSON.parse(response);
      if (j.status == 'success') {

        var formulario = $("#email-form-e");
        formulario[0].reset();
        // grecaptcha.reset();


        Swal.fire({
          title: 'success!',
          text: 'Gracias por registrarte en nuestro webinar nos vemos el 23 de Octubre.',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      } else {
        Swal.fire({
          title: 'error!',
          text: 'Ha ocurrido un error en breve estaremos de vuelta.',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }

    })
  });

});