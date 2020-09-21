$(document).ready( function()
{
   var baseFields = null;

   $.post(
      '/cout-certificat-immatriculation/Default/fields',
      {
         stepId: 0
      },
      function(data)
      {
         baseFields = data;
         console.log(baseFields);
      }
   )
   
})