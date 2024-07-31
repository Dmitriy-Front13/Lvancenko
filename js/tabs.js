const $modalReg = $('#modal-reg'),
      $modalLogIn = $('#modal-login'),
      $modalForgotPass = $('#modal-forgotPass'),
      $modalContainer = $('#modal-container');

// $modalLogIn.hide(); 
$modalReg.hide(); 
$modalForgotPass.hide(); 

$(document).on('click', (e) => {
  if ($(e.target).is('.login-link')) {
    $modalReg.fadeOut(400, function() {
      $modalLogIn.show();
    });
  } else if ($(e.target).is('.reg-link')) {
    $modalLogIn.fadeOut(400, function() {
      $modalReg.show();
    });
  } else if($(e.target).is('#link-pass')) {
    $modalLogIn.fadeOut(400, function() {
      $modalForgotPass.show();
    });
  }
});