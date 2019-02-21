// Controller
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.options = [
    {"Image": "Images/image1.jpg","NoPictures": "3", "Title": "Alquiler apartamento asdfasf", "Subtitle": "Subtitle No.1", "Description": "Un apartamento, también llamado departamento o piso, es una unidad de vivienda que comprende una o más habitaciones diseñadas para proporcionar instalaciones completas para un individuo o una pequeña familia.", "Price": 800,"Size": 100,"Room": 3,"Bathroom": 2,"Parking": 3},
    {"Image": "Images/image2.jpg","NoPictures": "4", "Title": "Alquiler casa asdfasfasdfas", "Subtitle": "Subtitle No.2", "Description": "Un apartamento, también llamado departamento o piso, es una unidad de vivienda que comprende una o más habitaciones diseñadas para proporcionar instalaciones completas para un individuo o una pequeña familia.", "Price": 800,"Size": 100,"Room": 3,"Bathroom": 2,"Parking": 3},
    {"Image": "Images/image3.jpg","NoPictures": "5", "Title": "Alquiler oficina asdfasdfadsfasf", "Subtitle": "Subtitle No.3", "Description": "Un apartamento, también llamado departamento o piso, es una unidad de vivienda que comprende una o más habitaciones diseñadas para proporcionar instalaciones completas para un individuo o una pequeña familia.", "Price": 800,"Size": 100,"Room": 3,"Bathroom": 2,"Parking": 3}
  ]
});