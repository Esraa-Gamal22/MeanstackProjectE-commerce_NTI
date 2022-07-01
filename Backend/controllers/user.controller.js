const userModel = require("../database/models/user.model")
const sendEmailMe = require("../helper/sendEmail.helper")
const fs = require("fs")
const path=require("path")

class User{
    //add user
    static register = async(req,res)=>{
        try{
            const user = new userModel(req.body)
            user.userType="user"
            await user.save()
            sendEmailMe(user.email, "hello")
            res.status(200).send({
                apiStatus: true,
                data:user,
                message:"user added successfuly"
            })
        }
        catch(e){   
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error in register"
            })
        }
    }
    static addAdmin = async(req,res)=>{
        try{
            const user = new userModel(req.body)
            user.userType="admin"
            await user.save()
            res.status(200).send({
                apiStatus: true,
                data:user,
                message:"user added successfuly"
            })
        }
        catch(e){   
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error in register"
            })
        }
    }
    static login = async(req,res)=>{
        try{
            const user = await userModel.loginUser(req.body.email, req.body.password)
            const token = await user.generateToken()
            res.status(200).send({
                apiStatus:true,
                data:{user, token},
                message:"logged in"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error:e, message:e.message})
        }
    }
    
    //update password
    static changePassword = async(req,res) =>{
        try{
            
            const userData= req.user
            userData.password = req.body.password
            await userData.save()
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //remove account
    static deleteUser= async(req,res)=>{
        try{
            const userData = await userModel.findByIdAndDelete(req.user._id)
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    static logout = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter(t=> t.token != req.token)
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                message:"logged out"
            })

        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    static profile = async(req,res)=>{
        res.status(200).send({apiStatus:true, data:req.user, message:"data featched"})
    }
    static addAddr = async(req,res)=>{
        try{
            req.user.addresses.push(req.body)
            await req.user.save()
            res.status(200).send({data:req.user, apiStatus:true, message:"ADDED"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    static uploadImage=  async(req, res)=>{
        try{
            const ext = path.extname(req.file.originalname)
            const newName = "images/"+req.file.fieldname + Date.now()+ext
            fs.rename(req.file.path, newName, ()=>{})
            req.user.image = newName
            req.user.name= req.body.name
            req.user.age = req.body.age
            await req.user.save()
            res.send({data:req.user})
        }
        catch(e){
            res.send(e.message)
        }
      }
    
}
module.exports = User