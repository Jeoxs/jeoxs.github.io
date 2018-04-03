/* Toggle the `clicky` class on the body when clicking links to let us
   retrigger CSS animations. See ../css/base.css for more details. */
   $("[id^=lang]").click(function(e) {
        switch($(this)[0].id){
            case 'lang-es':
                translate('es');
                break;
            case 'lang-en':
                translate('en');
                break;

        }
   });
$('a').click(function(e) {
    $('body').toggleClass('clicky');
});

/* Prevent disabled links from causing a page reload */
$("li.disabled a").click(function() {
    event.preventDefault();
});


var langs = ['es', 'en'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function() {
    current_lang_index = ++current_lang_index % 3;
    current_lang = langs[current_lang_index];
    translate();
}

function translate(language = '') {
    if(language == ''){
        language = 'es'
    }
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][language] || "N/A");
    });
}

translate();