import express from 'express';

const app=express()

function main (){
    app.get('/',(req,res)=>{
        res.send('Hello my bubblies')
    })
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    })
}
main()

