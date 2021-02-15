const express = require('express');
require('./db/connec');
const Employee = require('./models/Employee');
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors')
app.use(cors()) 
app.use(express.json());
// const bodyParser = require('body-parser');
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));

app.post('/employee', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const createEmplyee = await employee.save();
    res.status(201).send(createEmplyee);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/employee/add', async (req, res) => {
  try {
    const findemployee = await Employee.find();
    res.send(findemployee);
  } catch (err) {
    console.log(err);
  }
});

app.get('/employee/:id', async (req, res) => {
  try {
    const findbyid = await Employee.findById(req.params.id);
    res.send(findbyid);
    if (!findbyid) {
      return res.status(404).send();
    } else {
      res.send(findbyid);
    }
  } catch (err) {
    console.error(err);
  }
});

app.delete('/employee/:id', async (req, res) => {
  try {
    const deleteById = await Employee.findByIdAndDelete(req.params.id);
    res.send(deleteById);
    if (!deleteById) {
      res.status(404).send({ msg: 'You dont have any item to delete' });
    } else {
      res.status(201).send(deleteById);
    }
  } catch (err) {
    console.log(err);
  }
});

app.patch('/employee/:id', async (req, res) =>{
    try{
    const _id = req.params.id;
    const findandupdate = await Employee.findByIdAndUpdate(_id, req.body, {
        new:true,
    });
   res.send(findandupdate)
} catch(e){
    console.log(e)
}

})

app.listen(port, () => {
  console.log(`The Server is Running on the following port no ${port}`);
});
