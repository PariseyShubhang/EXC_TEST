import express from 'express';

const app=express()

function main (){
    app.get('/',(req,res)=>{
        return res.json({'message': 'Hello my bubblies. GITHUB ACTIONS retest'})
    })
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    })
}
main()

