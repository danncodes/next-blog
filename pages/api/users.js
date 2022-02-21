// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'
import bcrypt from 'bcrypt'

export default async function handler(req, res) {

    await dbConnect()
    // GET REQ
    if(req.method === "GET"){
        console.log("GET REQ")
    }
    // POST REQ
    if(req.method === "POST"){

        const user = await User.findOne({email: req.body.email})
        try {
            if(user){
                return res.status(422).json({message: "This User Already Exists ..."})
            }
            const hashedPassword = await bcrypt.hash(req.body.password, 12);
            const newUser = await new User({...req.body, image: "https://i.imgur.com/JN1QAOy.png", password: hashedPassword}).save()
            return res.status(200).json({message: "Sign Up Success..."})

            
        } catch (error) {
            console.log(error)
        }
    }
  }
  