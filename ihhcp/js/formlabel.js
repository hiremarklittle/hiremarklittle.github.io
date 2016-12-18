/*global $*/
$(document).ready(function () {
    
    $('form .formlabel input').focusout(function () {
        var inputValue = $(this).val();
        
        //check if input value exists
        if (inputValue === '') {
            $(this).removeClass('hasValue');
        } else {
            $(this).addClass('hasValue');
        }
        
    });
    
    $('form .formlabel textarea').focusout(function () {
        var inputValue = $(this).val();
        
        //check if textarea value exists
        if (inputValue === '') {
            $(this).removeClass('hasValue');
        } else {
            $(this).addClass('hasValue');
        }
    })
});