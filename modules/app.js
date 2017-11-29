var module=angular.module("App",["myController","ngTagsInput"]);
module.controller("control",Main);
function Main() {

}
module.controller('MainCtrl',ngTag);

 function ngTag($scope, $http) {
  $scope.tags = [
    { text: 'Tag1' },
    { text: 'Tag2' },
    { text: 'Tag3' }
  ];
}
