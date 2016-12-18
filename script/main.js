'use strict';

var $SWITCH_REFERENCE = $('[data-view-role="switch"]');

$SWITCH_REFERENCE.on('click', function() {
  $('body').toggleClass('responsive');
  if ($('body').hasClass('responsive')) {
    $SWITCH_REFERENCE.html('Fluid View');
  } else {
    $SWITCH_REFERENCE.html('Responsive View');
  }
})
