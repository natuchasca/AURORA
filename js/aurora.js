
$(document).ready(function () {


  // var onRecaptchaSuccess = function (token) {
   
  //   $('.mensaje_error').css({
  //     display: 'none'
  //   });

  // }

  // var onloadCallback = function () {
  //   widgetId1 = grecaptcha.render('recaptcha_contacto', {
  //     'sitekey': '6LfR8GMhAAAAAKiwqqQC-hXyD3K2tcZMDnZbDZ6m',
  //     'callback' : onRecaptchaSuccess
  //   });

  // };

  

  // setTimeout(() => {
  //   onloadCallback();
  // }, 1000);



  $("#submit").click(function () {

    $("#email-form-n").validate({
      rules: {
        contacto_pais: {
          required: true,
        },
        Nombre: {
          required: true,
        },
        institucion: {
          required: true,
        },
        contacto_cargo: {
          required: true,
        },
        contacto_email: {
          required: true,
          email: true,
        },
        contacto_telefono: {
          required: true,
        },
        Texto: {
          required: true,
        },
      },
      messages: {
        contacto_pais: {
          required: "<label style='color: red; text-align: left;'>* Campo Requerido</label>",
        },
        Nombre: {
          required: "<label style='color: red; text-align: left;'>* Campo Requerido</label>"
        },
        institucion: {
          required: "<label style='color: red; text-align: left;'>* Campo Requerido</label>"
        },
        contacto_cargo: {
          required: "<label style='color: red; text-align: left;'>* Campo Requerido</label>"
        },
        contacto_email: {
          required: "<label style='color: red; text-align: left;'>* Campo Requerido</label>",
          email: "<label style='color: red; text-align: left;'>* Email incorrecto</label>"
        },
        contacto_telefono: {
          required: "<label style='color: red; text-align: left;'>* Campo Requerido</label>"
        },
        Texto: {
          required: "<label style='color: red; text-align: left;'>* Debe colocar un mensaje.</label>"
        },
      }
    });

    var $valid = $("#email-form-n").valid();


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
      pais: $("#contacto_pais").val(),
      nombre: $("#contacto_nombre").val(),
      institucion: $("#contacto_institucion").val(),
      cargo: $("#contacto_cargo").val(),
      correo: $("#contacto_email").val(),
      telefono: $("#contacto_telefono").val(),
      descripcion: $("#contacto_descripcion").val(),
    };

    $.post("./contacto.php", data, function (response) {

      console.log(response);

      var j = JSON.parse(response);
      if (j.status == 'success') {

        var formulario = $("#email-form-n");
        formulario[0].reset();
        // grecaptcha.reset();


        Swal.fire({
          title: 'success!',
          text: 'Gracias por su mensaje. Nos pondremos en contacto con usted lo antes posible.',
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
          required: "<label style='color: red; text-align: left;'>* Campo Requerido</label>"
        },
        Apellido: {
          required: "<label style='color: red; text-align: left;'>* Campo Requerido</label>",
        },
        contacto_email: {
          required: "<label style='color: red; text-align: left;'>* Campo Requerido</label>",
          email: "<label style='color: red; text-align: left;'>* Email incorrecto</label>"
        },
       
      }
    });

    var $valid = $("#email-form-e").valid();


    var recaptchaValue = grecaptcha.getResponse();

    if (!recaptchaValue) {
      $('.mensaje_error').css({
        display: 'flex',
        color: '#e6576a',
        textAlign: "left !important",
        marginTop: "10px",
        fontWeight: 'bold'
      });

      $('.mensaje_error').text('Por favor, completa el reCAPTCHA.');

      return;
    }


    if (!$valid) {
      return false;
    }

    var data = {
   
      nombre: $("#contacto_nombre").val(),
      institucion: $("#contacto_institucion").val(),
      cargo: $("#contacto_cargo").val(),
      correo: $("#contacto_email").val(),
      apellido: $("#contacto_descripcion").val(),
    };

    $.post("./eventos.php", data, function (response) {

      console.log(response);

      var j = JSON.parse(response);
      if (j.status == 'success') {

        var formulario = $("#email-form-e");
        formulario[0].reset();
        grecaptcha.reset();


        Swal.fire({
          title: 'success!',
          text: 'Gracias por su mensaje. Nos pondremos en contacto con usted lo antes posible.',
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

