$('#url-notas_del_nerd').click(function(){
  $('#portfolio-container').hide("slow");
  $.get("portfolio/notas-del-nerd.html",function(data){
            $("#portfolio-detail").append(data);
  });
  location.href = "#portfolio";
});

$('#url-integria').click(function(){
  $('#portfolio-container').hide("slow");
  $.get("portfolio/integria.html",function(data){
            $("#portfolio-detail").append(data);
  });
  location.href = "#portfolio";
});

$('#url-receta_salud').click(function(){
  $('#portfolio-container').hide("slow");
  $.get("portfolio/receta-salud.html",function(data){
            $("#portfolio-detail").append(data);
  });
  location.href = "#portfolio";
});
