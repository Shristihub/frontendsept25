//like a class in java
let Student = function (studentName,city,department){
    this.studentName = studentName;
    this.city = city;
    this.department=department;
    this.details = function(){
        console.log(this.studentName);
    }
}
//create an object
let student = new Student('Helen','Pune','ECE');
console.log(student);
console.log(student.studentName);

Student.prototype.mobile = 89008
Student.prototype.showHobbies = function(){
    let hobbies = ['music','dance'];
    return hobbies;
}
console.log(student.mobile);
let student1 = new Student('Jo','Pune','ECE');
console.log(student1);
console.log(student1.mobile);
let hobbies = student1.showHobbies();
hobbies.forEach(ele=>console.log(ele))