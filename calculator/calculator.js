var module=angular.module("myApp",[]);
module.controller("calculator",calc);

function calc() {

this.buttonclicked=function(button){
  this.opration=button;
}

this.getResult=function() {
  var num1=parseFloat(this.field1);
  var num2=parseFloat(this.field2);
  if(this.opration==='+')
  {
    this.result=num1+num2;
  }
  if(this.opration==='-')
  {
    this.result=num1-num2;
  }
  if(this.opration==='*')
  {
    this.result=num1*num2;
  }
  if(this.opration==='/')
  {
    this.result=num1/num2;
  }

}


}
