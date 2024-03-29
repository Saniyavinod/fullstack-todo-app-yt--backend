const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {

    const { text } = req.body
    
    ToDoModel
        .create({ text })
        .then((data) => {
             console.log("Added successfully...");
             console.log(data);
             res.send(data)
        })
        .catch((err) => console.log(err));
}  

module.exports.updateToDo = async (req, res) => {
    const { id, text} = req.body
    ToDoModel
        .findByIdAndUpdate(id, {text})
        .then(()=> res.send("Updated successfully...."))
        .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const { id, } = req.body
    ToDoModel
        .findByIdAndDelete(id)
        .then(()=> res.send("Deleted successfully...."))
        .catch((err) => console.log(err))
}


      