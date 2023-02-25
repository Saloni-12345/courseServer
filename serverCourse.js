let express = require("express");
let app = express();
app.use(express.json());
app.use(function(req,res,next){
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Methods",
"GET,OPTIONS,PUSH,PUT,PATCH,DELETE,HEAD");
res.header("Access-Control-Allow-Headers",
"Origin,X-Requested-With,Content-Type,Accept");
next();
});
var port = process.env.PORT||2450;
app.listen(port,()=>console.log(`Node app listening on port ${port}!`))

let customers = [
    {
      custId: 1,
      name: "ABC",
      password: "abc1234",
      role: "admin",
      email: "abc@gmail.com"
    },
    {
      custId: 2,
      name: "Willie",
      password: "willie1234",
      role: "student",
      email: "willie@gmail.com"
    },
    {
      custId: 3,
      name: "Jack",
      password: "jack1234",
      role: "faculty",
      email: "jack@gmail.com"
    },
    {
      custId: 4,
      name: "James",
      password: "james1234",
      role: "student",
      email: "james@gmail.com"
    },
    {
      custId: 5,
      name: "Harry",
      password: "harry1234",
      role: "faculty",
      email: "harry@gmail.com"
    },
    {
      custId: 6,
      name: "Tia",
      password: "tia1234",
      role: "student",
      email: "tia@gmail.com"
    },
    {
      custId: 7,
      name: "Aditya",
      password: "aditya123",
      role: "faculty",
      email: "aditya@gmail.com"
    },
    {
      custId: 8,
      name: "Sonu",
      password: "sonu1234",
      role: "student",
      email: "sonu@gmail.com"
    },
    {
      custId: 9,
      name: "Ellie",
      password: "ellie1234",
      role: "student",
      email: "ellie@gmail.com"
    },
    {
      custId: 10,
      name: "Gia",
      password: "gia1234",
      role: "faculty",
      email: "gia@gmail.com"
    }
  ];
  let courses = [
    {
      courseId: 1,
      name: "ANGULAR",
      code: "ANG97",
      description: "All fundamentals of Angular 7",
      faculty: ["Daniel", "Jack"],
      students: ["Sam"]
    },
    {
      courseId: 2,
      name: "JAVASCRIPT",
      code: "JS124",
      description: "Intoduction to javascript",
      faculty: ["Aditya"],
      students: ["James", "Joy", "Monu", "Rita"]
    },
    {
      courseId: 3,
      name: "REACT",
      code: "RCT56",
      description: "React Javascript library",
      faculty: ["Jack", "Gia"],
      students: ["Raima", "Rita", "Sonu", "James"]
    },
    {
      courseId: 4,
      name: "BOOTSTRAP",
      code: "BS297",
      description: "Bootstrap Designing Framework",
      faculty: [],
      students: ["James", "Tia", "Ellie"]
    },
    {
      courseId: 5,
      name: "CSS",
      code: "CS365",
      description: "Basic stylesheet language",
      faculty: [],
      students: ["James", "Rita", "Monica"]
    },
    {
      courseId: 6,
      name: "REST AND MICROSERVICES",
      code: "RM392",
      description: "Introduction to Microservices",
      faculty: [],
      students: ["Sam"]
    },
    {
      courseId: 7,
      name: "NODE",
      code: "ND725",
      description: "Introduction to Node",
      faculty: ["Sonia"],
      students: ["Saransh", "Shrey", "Monica"]
    }
  ];
 let faculties = [
    { id: 5, name: "Daniel", courses: ["ANGULAR"] },
    { id: 4, name: "Sonia", courses: ["NODE"] },
    { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
    { id: 2, name: "Gia", courses: ["REACT"] },
    { id: 1, name: "Aditya", courses: ["ANGULAR"] }
  ];
 let  classes = [
    {
      classId: 1,
      course: "REACT",
      time: "07:45",
      endTime: "08:45",
      topic: "Redux",
      facultyName: "Jack"
    },
    {
      classId: 2,
      course: "ANGULAR",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Jack"
    },
    {
      classId: 3,
      course: "JAVASCRIPT",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Aditya"
    }
  ];
let  students = [
    {
      id: 16,
      name: "Willie",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "NODE"]
    },
    {
      id: 15,
      name: "Tia",
      dob: "30-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 14,
      name: "Apoorv",
      dob: "31-August-1998",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 13,
      name: "Joy",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 12,
      name: "Rachel",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 11,
      name: "Monica",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["CSS", "NODE"]
    },
    {
      id: 10,
      name: "Monu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 9,
      name: "Sonu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["REACT"]
    },
    {
      id: 8,
      name: "Raima",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["REACT"]
    },
    {
      id: 7,
      name: "Rita",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "REACT", "CSS"]
    },
    {
      id: 6,
      name: "Shrey",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["NODE"]
    },
    {
      id: 5,
      name: "Saransh",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: ["NODE"]
    },
    {
      id: 4,
      name: "Sanya",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 3,
      name: "James",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
    },
    {
      id: 2,
      name: "Sam",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "REST AND MICROSERVICES"]
    },
    {
      id: 1,
      name: "Ellie",
      dob: "12-June-1992",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["BOOTSTRAP"]
    }
  ];
app.get("/getStudentNames",function(req,res){
 let stud = students.reduce((acc,curr)=>curr.name?[...acc,curr.name]:acc,[]);
 res.send(stud);
})
app.get("/getFacultyNames",function(req,res){
let facult = faculties.reduce((acc,curr)=>curr.name?[...acc,curr.name]:acc,[]);
res.send(facult);
})
app.get("/getCourses",function(req,res){
  res.send(courses);
});
app.get("/getCourses/:courseId",function(req,res){
 let id = +req.params.courseId;
 let courseFind = courses.find((c1)=>c1.courseId===id);
 if(courseFind==undefined){
    res.status(404).send("Course Not Found");
 }else{
    res.send(courseFind);
 }
});
app.get("/getStudentDetails/:name",function(req,res){
 let name = req.params.name;
 let stud = students.find((st)=>st.name==name);
 if(stud==undefined){
    res.status(500).send("No Student found");
 }else{
    res.json({
        id: stud.id ,
        name: stud.name,
        dob: stud.dob,
        gender: stud.gender,
        about: stud.about
    })
 }
})
app.get("/getStudents",function(req,res){
let page = +req.query.page;
let course = req.query.course?req.query.course.split(","):null;
let size = 3 ;
let student = [];
 if(course!=null){
    student = students.filter((st)=>st.courses.find((c1)=>course.find((c)=>c==c1)))
 }else
  student = students;
let startIndex = (page-1)*size;
let endIndex = student.length>startIndex + size - 1?
startIndex + size - 1: student.length - 1;
let items = student.length>3?student.filter((st,index)=>
index>=startIndex && index<=endIndex):student;
 res.json({
    pageNumber:page,
    items:items,
    totalItems:items.length, 
    totalNum:student.length
 });
});
app.get("/getFaculties",function(req,res){
let page = +req.query.page;
let course = req.query.course?req.query.course.split(","):null;
let size = 3;
let facult = [];
 if(course!=null){
    facult = faculties.filter((fac)=>fac.courses.find((c1)=>course.find((c)=>c==c1)));
 }else
   facult = [...faculties];
let startIndex = (page - 1)* size;
let endIndex = facult.length> startIndex + size - 1?
   startIndex + size - 1: facult.length - 1;  
 let items = faculties.length>3?facult.filter((f1,index)=>index>=startIndex && index<= endIndex):facult;
console.log(items);
//console.log(facult)
 res.json({
    pageNumber:page,
    items:items,
    totalItems:items.length,
    totalNum:facult.length
 })
});
app.get("/getStudentCourse/:name",function(req,res){
let name = req.params.name;
let courseArr = courses.filter((c1)=>c1.students.find((st)=>st==name));
let array = courseArr.map((c1)=>({
    courseId: c1.courseId,
    name: c1.name,
    code: c1.code,
    description: c1.description
    }));
    res.send(array);
})
app.get("/getStudentClass/:name",function(req,res){
let name = req.params.name;
let stud = students.find((st)=>st.name == name).courses;

let classArray = classes.filter((cl)=>stud.find((st)=>st==cl.course));
 res.send(classArray);
})
app.get("/getFacultyCourse/:name",function(req,res){
let name = req.params.name;
let courseArr = courses.filter((c1)=>c1.faculty.find((f1)=>f1==name));
 let array = courseArr.map((c1)=>({
    courseId: c1.courseId,
    name: c1.name,
    code: c1.code,
    description: c1.description
 }))
 res.send(array);
})
app.get("/getFacultyClass/:name",function(req,res){
let name = req.params.name;
let classArray = classes.filter((c1)=>c1.facultyName === name);
res.send(classArray);
})
app.get("/getClasses/:classId",function(req,res){
let classId = req.params.classId;
let classfind = classes.find((c1)=>c1.classId==classId);
if(classfind==undefined){
  res.status(500).send("No Class found");
}else{
    res.send(classfind);
}
})
app.post("/login",function(req,res){
let body = req.body;
let cust = customers.find((c1)=>c1.email==body.email && c1.password==body.password);
if(cust){
 let obj = {name:cust.name,email:cust.email,role:cust.role};
 res.send(obj);
}else{
    res.status(500).send("Incorrect Email or Password !!!");
}
})
app.post("/register",function(req,res){
let body = req.body;
let maxid = customers.reduce((acc,curr)=>curr.id?acc+1:acc,0);
let newid = +maxid + 1
let stud = {
    custId: newid,
    name: body.name,
    password: body.password,
    role: body.role,
    email: body.email
};
customers.push(stud);
 let cust = {
    name: body.name,role: body.role,email: body.email
 }
//console.log(stud);
  res.send(cust);
})
app.post("/postStudentDetails",function(req,res){
let body = req.body;
let maxid = students.reduce((acc,curr)=>curr.id?acc+1:acc,0);
let newid = +maxid+1;
 let newStud = {id:newid,...body,courses:[]};
 students.unshift(newStud);
 res.send(newStud);
})
app.post("/postClass",function(req,res){
let body = req.body;
let maxid = classes.reduce((acc,curr)=>curr.classId?acc+1:acc,0);
let newid = +maxid+1;
let newClass = {classId:newid,...body};
 classes.push(newClass);
 res.send(newClass);
})
app.put("/postClass/:classId",function(req,res){
let classId = +req.params.classId;
let body = req.body;
let index = classes.findIndex((c1)=>c1.classId==classId);
if(index>=0){
    let classArray = {...classes[index],...body};
     classes[index] = classArray;
     res.send(classArray);
}else{
    res.status(500).send("No Class Found");
}
})
app.put("/putCourse",function(req,res){
 let body = req.body;
 let index = courses.findIndex((c1)=>c1.courseId === +body.courseId);
 if(index>=0){
    let courseUpdate = { ...courses[index],...body};
    courses[index] = courseUpdate;
    res.send(courseUpdate);
 }else
  res.status(404).send("Could not find course");
});
