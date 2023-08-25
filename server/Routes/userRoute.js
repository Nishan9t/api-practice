const express =require("express");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

//creating user express router
const route=express.Router();

//importing userModel
const userModel=require('../models/UserModel');

const secretModel=require('../models/SecretModel');
const commentModel = require("../models/CommentModel");

//creating register route
route.post('/signup',async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        //check emptiness of incoming data
        if(!name || !email || !password){
            return res.json({message:"please enter all the details"})
        }

        //check if the user already exist or not
        const userExist= await userModel.findOne({email:req.body.email});
        if(userExist){
            return res.json({message: 'User already exist with the give emailId'})
        }

        //hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password,salt);
        //changing password with hash
        // req.body.password=hashPassword;
        
        //getting user with body same as req.body and change its password with hashPassword
        const user = new userModel({...req.body,password:hashPassword});
        await user.save();
        //creating token with id:user._id
        const token =await jwt.sign({id:user._id},process.env.SECRET_KEY,{
            expiresIn:'24h'}
        );
        
    return res.send({data:token,message:'User registered successfully'})


    }
    catch(error)
    {
        return res.json({error:error});

    }

})

//creating login route
route.post('/login',async(req,res)=>{

    try{
        const {email,password}= req.body;
        //check emptiness of the incoming data
        if(!email || !password)
        {
            return res.json({message:'Please enter all the details'});
        }

        //check if user already exist or not
        const userExist = await userModel.findOne({email:req.body.email});
        if(!userExist)
        {
            return res.json({message:"Wrong credentials"});
        }

        //check password match
        const isPasswordMatched = await bcrypt.compare(password,userExist.password);
        if(!isPasswordMatched)
        {
            return res.json({message:"Wrong credentials pass"});
        }

        const token = await jwt.sign({id:userExist._id},process.env.SECRET_KEY,{
            expiresIn:'24h'
        }
        );

        return res.send({data:token,message:"Logged in successfully"});
        
    }
    catch(error)
    {
        return res.json({error:error})
    }



})

//Creating message routes to store secrets
route.post('/secret',async(req,res)=>{

    
    const data=new secretModel({...req.body});
    await data.save();
    res.send({success:true,message:"data saved successfully",data:data});



})

//getting all secrets

route.get('/',async(req,res)=>{
    try{
        const secrets = await secretModel.find({});
        res.status(200).json({success:true,data:secrets});

    }
    catch(error)
    {
        res.status(500).json({error:error});
    }
})

// add comment
route.post('/comment',async(req,res)=>{

    const data = new commentModel({...req.body});
    await  data.save() ;
    res.send({success:true,message:"comment saved",data:data});

})

module.exports=route;