const Student = require("../model/Student");
const signup = (req, res) => {
  let {name, email, regno, password} = req.body
  Student.findOne({regno}).then(stud => {
      if(!stud) {
          const newStudent = new Student({ regno, email, name, password })
          newStudent.save().then(data => res.status(201).send(data))
          .catch(err => res.status(502).send("Error in creating user."))
      }
      else {
        res.status(403).send({ message: "Student already exists" });
      }
  })
  .catch((e) => res.status(502).send({ message: "Server error" })); 
}
const login = async (req,res) => {
    let {regno, password} = req.body;
    try{
      let students = await Student.find({});
      let currentStudent = students.find((stud)=>stud.regno === regno);
      if(!currentStudent) res.status(404).send({message:"user not found"});
      else if(currentStudent.password !== password) res.status(401).send({message:"incorrect password"});
      else res.status(200).send(currentStudent);
    }
    catch(e){
        res.status(502).send({ message: "error" });
    }
}

module.exports = {signup , login};