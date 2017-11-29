var module=angular.module("App",[]);
module.controller("control",Main);

function Main() {


this.myList=["Learning Angular","Learning spring"];
  this.editMode=false;
this.edit=function () {
  this.editMode=!this.editMode;
}

this.addList=function() {
  this.myList.push(this.data);
  this.data="";
}
this.delete=function (index){
this.myList.splice(index,1);
  console.log(index);
}

  console.log("working")

}
