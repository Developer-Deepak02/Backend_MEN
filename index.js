const express = require("express")
const morgan = require("morgan")
const app = express()

app.set('view engine' , 'ejs')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((req,res,next) =>{
    console.log('this is a custom middleware');
    return next()
})

// app.get('/' , (req , res , next )=>{
//     console.log('custom middleware for home page ')
//     next()
// } ,
//  (req,res) =>{
//     res.render('index')
// })

app.get('/' , (req,res)=>{
    res.render('index')
})

app.get('/about' , (req,res) =>{
    res.send("about page !!")
})

app.post('/form-data', (req,res)=>{
    console.log(req.body)
    res.send('data recived')
})

app.listen(3000)