import { User } from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import "dotenv/config";

export const register = async (req,res) =>{
  try{
    const {name,email,phone,password}=req.body;
    const existingUser = await User.findOne({where:{email}});
    if(existingUser){
      return res.status(400).json({message:"Email already registered."})
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,

    });

    res.status(201).json({message:"User registered succesfully"});
  } catch(err){
    console.log("Registration error:" , err);
    res.status(500).json({message:"Server error"})
  }
};

export const login = async (req,res)=>{
  try{
  const{email,password}=req.body;
  const user = await User.findOne({where:{email}});
  if(!user){
    return res.status(401).json({message:"User not registered."})
  }
  const isMatch=bcrypt.compare(password, user.password);
  if(!isMatch){
    return res.status(401).json({message:"Incorrect Paswword!"});
  }

  const jwtToken =jwt.sign(
    {
      id:user.id,email:user.email
    },
    process.env.JWT_SECRET,
    {expiresIn:'1h'}
  );

  res.json({jwtToken});
  }catch(err){
    console.log("Login error", err);
    res.status(500).json({message:"Server Error"});
  }
};