import mongoose from "mongoose";

const Schema = mongoose.Schema;
const leaveSchema=new Schema({
    user:{type:String,
        // required:true
    },

    leaveType:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        // required:true
    },  
  
    
})

export default mongoose.model("leave",leaveSchema)