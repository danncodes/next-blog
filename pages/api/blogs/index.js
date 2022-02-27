// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from '../../../lib/dbConnect'
import Blog from '../../../models/Blog'
import { getSession } from "next-auth/react"

export default async function handler(req, res) {

    await dbConnect()
    
    const session = await getSession({ req })


    if(!session) return res.status(404).json("User Not Authenticated")

    // GET REQ
    if(req.method === "GET"){
        try {
            const userBlogs = await Blog.find({username: session.user.email})
            return res.status(200).json(userBlogs)
        } 
        catch (error) {
            return res.status(404)
        }
    }

    // POST REQ
    if(req.method === "POST"){
        try {
            const newBlog = await Blog.create({
                username: session.user.email,
                title: req.body.title,
                body: req.body.body,
                image: req.body.image,
                tags: req.body.tags
            })
    
            return res.status(200).json("New Blog Posted")
            
        } 
        catch (error) {
            return res.status(404)
        }
    }
  }