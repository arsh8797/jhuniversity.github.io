const path = require('path')
const hbs=require('hbs')
const express = require("express");
const { dirname } = require('path');
const app=express();
const port=80

// static file serving
const myPath=path.join(__dirname,"../public")
const templetPath=path.join(__dirname,"../templets/views")
const partialPath=path.join(__dirname,"../templets/partials")
app.use(express.static(myPath))
app.set('view engine',"hbs")
app.set('views',templetPath)
hbs.registerPartials(partialPath)
// console.log(path.join(__dirname,'../public'))
// const mypath=path.join(__dirname,'../public')
// app.use(express.static(mypath));
// console.log(__dirname)..this is absolute path

// to set a view engien for hbs templets

// monitoring root of templets
app.get('/',(req,res)=>{console.log('run')
res.render('index')})
app.get('/about',(req,res)=>{res.render("about");})
app.get('/contact',(req,res)=>{console.log('contact')
res.render('contact')})
app.listen(port,()=>{console.log(`srever run at port ${port}`)})
