const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(req)
        .catch((err)=>next(err))
    }
}

export {asyncHandler}