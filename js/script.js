$(document).ready(
  function () {
    console.log("hello world");
    // Esercizio: creare una to-do list, come quella fatta insieme stamattina, utilizzando Handlebars come templating engine

    // collegamento
    var source = $('#entry-template').html();
    console.log(source);
    var template = Handlebars.compile(source);

    var toDoList = [
      "cucinare",
      "fare benzia",
      "fare la spesa",
      "comprare il giornale"
    ];

    for (var i = 0; i < toDoList.length; i++) {
      var listItem ={
        toHtml: toDoList[i]
      };
      var html = template(listItem);
      $('#list').append(html)
    }

    $(document).on( "click", '.fa-check-circle', function(){
      $(this).parent().remove();
    }
    );

    $("input").keyup(
      function(){
        // console.log(event.which);
        if (event.which == 13) {
          console.log($("input").val());
          var newItem = $("input").val();
          var newobject = {
            toHtml : newItem,
          }

          var htmlNew = template(newobject);
          $('#list').append(htmlNew)


        }

      }
    );
  }
);
