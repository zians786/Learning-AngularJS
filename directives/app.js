var module=angular.module("App",[]);
module.controller("control",Main);

function Main() {
  this.myList=[1,2,3];
  this.objectList=[
    {'name':"Ajit",'age':24},
        {'name':"Faisal",'age':23},
            {'name':"Imran",'age':22},
  ]
  console.log("working")

}
