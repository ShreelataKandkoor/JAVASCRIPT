var employee = {
  name: "Jhon Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
    console.log(this.name.length);
  }
}



var employee = {

  name: "john Smith",
  job: "Programmer",
  age: 31,
  report: function(){
    alert("Name is"+this.name+", Age is: "+this.age);
  }
}



var employee = {
  name: "John smsith",
  job: "Programmer",
  age:  31,
  lastName: function(){
    console.log(this.name.split(" ")[1]);
  }
}
