$(document).ready( function()
{
    var menu = [];
    $('#listbox-items-demarche li').each( function(i, li)
    {
        menu.push($(li).text().trim());        
    })

    $('.glyphicon.glyphicon-menu-down').each( function(i, icon)
    {
        $(icon).removeClass('glyphicon glyphicon-menu-down');
        $(icon).addClass('fas fa-chevron-down m-1');
    })

    $('.glyphicon.glyphicon-calendar').each( function(i, calendar)
    {
        $(calendar).removeClass('glyphicon glyphicon-calendar');
        $(calendar).addClass('fas fa-calendar-alt m-1');
    })

    
    $('.icon.icon-help').each( function(i, icon)
    {
        $(icon).removeClass('icon icon-help');
        $(icon).addClass('text-primary fas fa-info-circle');
    });

    $('.mention-asterisk').insertAfter( $('#g6k_form') );

    $('#eirl-container').removeClass('d-none');

    // setTimeout( function(){
    //     $('.field-container').addClass('d-block');
    //     $('fieldset').addClass('d-block');
    // }, 2000)
})