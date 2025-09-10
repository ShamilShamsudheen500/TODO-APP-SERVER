const todos = require("../models/todoModel")


//add todo list

exports.addTodoController=async(req,res)=>{
    console.log("inside add todo");
    const{ title,description, status}=req.body
   try{
    const existingTodos=await todos.findOne({title})
    if(existingTodos){
       return res.status(401).json("todos already exist")
    }
    else{
        const newTodos=new todos({
             title,
            description,
             status,
        })
        await newTodos.save()
        res.status(200).json(newTodos)
    }

   }
   catch(error){
    res.status(401).json(error)
   }
    
}
 
//get all todo
exports.getTodo=async(req,res)=>{
    console.log("inside get project");
    try{
        const allTodos=await todos.find();
        res.status(200).json(allTodos)
    }
    catch(error){
        res.status(401).json(error)        
    }
    
}

//edit todolist
exports.editTodoController = async(req,res)=>{
    console.log("Inside editTodoController");
    const {id}=req.params
    const {title,description,status} =req.body
    try {
        
    const updateTodo = await todos.findByIdAndUpdate({_id:id},{
       title,description,status },{new:true})
    await updateTodo.save()
    res.status(200).json(updateTodo)
} catch (error) {
    res.status(401).json(error)
    
}
    
}

//delete todolist
exports.deleteTodoController=async(req,res)=>{
    console.log("Inside deletetodocontroller");
    const {id}=req.params
    try {
        const deleteTodo=await todos.findByIdAndDelete({_id:id})
        res.status(200).json(deleteTodo)
    } catch (error) {
        res.status(401).json(error)
    }

    
}