const Student = require("../model/Student");
const bcrypt = require("bcrypt");

const Cryptr = require("cryptr");

cryptr = new Cryptr('devnami');

const signup = async(req, res) => {
  // let {name, email, regno, password} = req.body
  // Student.findOne({regno}).then(stud => {
  //     if(!stud) {
  //         const newStudent = new Student({ regno, email, name, password })
  //         newStudent.save().then(data => res.status(201).send(data))
  //         .catch(err => res.status(502).send("Error in creating user."))
  //     }
  //     else {
  //       res.status(403).send({ message: "Student already exists" });
  //     }
  // })
  // .catch((e) => res.status(502).send({ message: "Server error" })); 

  // ===================================
  const data = req.body;
  Student.findOne({ regno: data.regno },(err,body)=> {
    if(body!=null) res.status(403).json({error:"user already exist"});
    const hash = bcrypt.hashSync(data.password,10);
    const newUser = new Student({...req.body,password:hash});
    newUser.save().then(doc => res.status(201).json({user:doc}))
    .catch((err) => res.status(403).json({error:"Error"}))
  })
}


const login = async (req,res) => {
    // let {regno, password} = req.body;
    // try{
    //   let students = await Student.find({});
    //   let currentStudent = students.find((stud)=>stud.regno === regno);
    //   if(!currentStudent) res.status(404).send({message:"user not found"});
    //   else if(currentStudent.password !== password) res.status(401).send({message:"incorrect password"});
    //   else res.status(200).send(currentStudent);
    // }
    // catch(e){
    //     res.status(502).send({ message: "error" });
    // }
    
    const body = req.body;
    try{
    const currentStudent = await Student.findOne({ regno: body.regno });
    if (currentStudent) {
      const validPassword = bcrypt.compareSync(body.password, currentStudent.password);
      if (validPassword) res.status(200).send(currentStudent);
      else res.status(400).send({ error: "Incorrected Password" });
    } 
    else res.status(401).send({ error: "User does not exist" });
    }
    catch(e){
      res.status(502).send({ message: "error" });
    }
}

const details =  (req,res) => {
  let {details,findId} = req.body;
    // for (const key in details)  details[key] = cryptr.encrypt(details[key]);
    Student.findByIdAndUpdate(findId,{details:details},{new:true},(err,data)=>{
      if(err) res.status(404).send({message:"user not found"});
      else res.status(200).send({data});
    })
}




const viewdetails = (req,res) => {
  let{findId} = req.body;
  Student.findById(findId, (error, data) => {
    if (error) {
      return next(error)
    } else {
      // for (const key in data.details)  data.details[key] = cryptr.decrypt(data.details[key]);
      res.json(data)
    }
})

}
module.exports = {signup , login, details, viewdetails};