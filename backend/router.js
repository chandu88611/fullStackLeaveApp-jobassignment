
import express from "express"
import Leave from "./model.js"
const router = express.Router()
router.post('/',async (req, res, next) => {
    const { user,leaveType, startDate, endDate, comments }= req.body;
    const data = new Leave({
        user,
        leaveType,
        startDate,
        endDate,
        comments

    });
    console.log(data)
    try {
        await data.save();
    } catch (err) {

        console.log(err)
    }
    return res.status(200).json({ data })
})


router.get('/',async (req, res, next) => {
    // const { name,
    //     leaveType,
    //    startDate,
    //    endDate,
    // comments}=req.body;
    let leaves;
    try {
        leaves = await Leave.find();
    } catch (err) {
        console.log(err)
    }
    if (!leaves) {
        return res.status(404).json({ message: "no leaves found" })
    }
    return res.status(200).json({ leaves })
})


router.put('/:id',async (req,res,next)=>{
    const { user,leaveType, startDate, endDate, comments }= req.body;
    const blogId=req.params.id;
    let updatedLeave;
    try {
         updatedLeave=await Leave.findByIdAndUpdate(blogId,{
            user,leaveType, startDate, endDate, comments
         })
    } catch (error) {
        return console.log(error)
    }
    if(!updatedLeave){
        return res.status(500).json({message:"Unable to  update the Leave"})
    }
    return res.status(200).json({updatedLeave})
})

router.delete('/:id',async (req,res,next)=>{
    const Id=req.params.id;
    let leave;
    try {
        leave=await Leave.findByIdAndRemove(Id)
        // await blog.user.blogs.pull(blog)
    } catch (error) {
        return console.log(error)
    }
   if(!leave){
  return res.status(404).json({message:"unable to delete"})
   }
   return  res.status(200).json({message:"succesully deleted"})
})
export default router