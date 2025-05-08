import { Activity } from "../models/index.js";

export const listActivities =async(req,res)=>{
  try{
    const activities=await Activity.findAll({
      attributes:["id","title","description","location","datetime"],
    });
    res.json(activities);
  }catch(err){
      console.error("error fetching activities",err)
  }
};