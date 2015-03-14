/**
 * Created by kruiz on 14-Mar-15.
 */

//de esta forma tan sencilla consumimos con $resource en AngularJS
app.factory("dataResource", function ($resource) {
  return $resource("/scripts/js/data.json", //la url donde queremos consumir
    {}, //aquí podemos pasar variables que queramos pasar a la consulta
    //a la función get le decimos el método, y, si es un array lo que devuelve
    //ponemos isArray en true
    { get: { method: "GET", isArray: true }
    })
})
