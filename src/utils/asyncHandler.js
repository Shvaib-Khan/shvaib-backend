const asyncHandler =(requestHandler) => {

   return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }

}



export { asyncHandler }





// const asyncHandler=()=>{}
// const asyncHandler=(func)=>{}
// const asyncHandler=(func)=>{()=>{}}// us func to ek aur function me pass kar diya
//same thing is written below


// ye hai try catch wala method lekin agar promise wala dikhe company me to wo kaisa hoga upar likha hai

// const asyncHandler = (fn) => async (req, res, next) => {

//     try {

//         await fn(req, res, next)
        
//     } catch (error) {
        
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })

//     }

// }

