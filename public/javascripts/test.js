var app = angular.module("test",[]);

app.controller("test-controller", function($scope, $http){

  $scope.email = "";
  $scope.password = "";
  $scope.login_success = true;
  //$scope.showEye = true;

  // const password_div = document.getElementById("password_input");
  // eye_slash_icon= document.getElementsByClassName("far fa-eye-slash fa-2x");
  //
  // password_div.addEventListener("mouseover", function(event){
  //   $scope.showEye = false;
  // });
  //
  // password_div.addEventListener("mouseout", function(event){
  //   $scope.showEye = true;
  // });

  $scope.login = function(){
    $http.post("/login",{email:$scope.email, password: $scope.password}).success(function(data){
      console.log(data)
      $scope.login_success = true;
    }).error(function(error){
        console.log(error);
        $scope.login_success = false;
    });
  }
})
