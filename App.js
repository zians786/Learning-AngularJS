
var module=angular.module("myApp",[]);
module.controller("mainFrame",Main);
module.controller("control1",control1);
module.controller("control2",control2);
function Main($scope) {
  var tempDate=new Date();
  $scope.currentDate=tempDate.toTimeString();

  //For update Time on Button clicked
$scope.updateTime=function() {
  var tempDate=new Date();
  $scope.currentDate=tempDate.toTimeString();
  console.log("Button clicked");
}


$scope.userName="";
  console.log("main called");
}

function control1($scope) {
  $scope.paragraph="First controller";

}

function control2($scope) {
  //$scope.paragraph="Second controller";
  $scope.paragraph="Second controller";
}

// function control1($scope) {
//   this.paragraph="First controller";
//
// }
//
// function control2($scope) {
//   //$scope.paragraph="Second controller";
//   this.paragraph="Second controller";
// }
