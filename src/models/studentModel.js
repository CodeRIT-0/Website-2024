import mongoose from  "mongoose";

const studentSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Required"],
    },
    usn:{
        type:String,
        required:[true,"USN is required"]
    },
    branch:{
        type:String,
        required:[true,"Branch is required"]
    },
    email:{
        type:String,
        required:[true,"Email Required"],
    },
    phone:{
        type:String,
        required:[true,"Phone No Required"],
    },
    queries:String
})


const Student=mongoose.models.Student || mongoose.model("Student",studentSchema);

export default Student;
