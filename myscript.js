const URL = 'https://covid19.mathdro.id/api' ;

let app = angular.module("Myapp",[]);

app.controller("MyCtrl",($scope,$http,$filter) => {

 

                $scope.title ="Stay Home Stay safe";

                console.log("App Loaded");

                $http.get(URL).then(

                                   (response) => {               

                console.log(response.data);
                $scope.all_data= response.data;

},

(error) => {

                console.log(error);

}
                

                );
          $scope.get_c_data = () => {
              let country= $scope.c;
              if(country==""){
                  $scope.c_data= undefined;
                  return;
              }
              $http.get(`${URL}/countries/${country}`)
              .then((response)=>{
                  console.log(response.data);
                  $scope.c_data=response.data;
                   var item= $scope.c_data.lastUpdate;
                  var  mydate= new Date(item);
                  $scope.cc= $filter('date')(mydate , 'dd/MM/yyyy');
              },
              (error)=>{

                  console.log(error);
              }
              );
          };
         
});

 
