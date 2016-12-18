/*global $*/
$(document).ready(function () {
    'use strict';
    
    $('form .footerForm input').focusout(function () {
        var inputValue = $(this).val();
        
        //check if input value exists
        if (inputValue === '') {
            $(this).removeClass('hasValue');
        } else {
            $(this).addClass('hasValue');
        }
        
    });
});