const express = require('express');
const router = express.Router()

const Author = require('../models/authors.js')

router.post('/authors', async (req, res) => {
   const author = new Author({
      name : req.body.name,
      email : req.body.email,
      bookName : req.body.bookName,
      age : req.body.age,
      MobileNumber : req.body.MobileNumber,
      address : req.body.address
   })

   try{
      if(1100){
         res.json({ message : "already exist"})
         return
      }
      const creatAuthor = await author.save()
      res.json(creatAuthor)
   }catch(err){
      res.json(err)
      
   }
});

module.exports = router