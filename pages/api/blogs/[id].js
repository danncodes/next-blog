// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from '../../../lib/dbConnect'
import Blog from '../../../models/Blog'
import { getSession } from "next-auth/react"

export default async function handler(req, res) {

    await dbConnect()
    
    const session = await getSession({ req })
    if(!session) return res.status(404).json("User Not Authenticated")

    const id = req.query.id

    // GET REQ
    if(req.method === "GET"){
        try {
            const blog = await Blog.find({username: session.user.email, _id: id})
            return res.status(200).json(blog)
        } 
        catch (error) {
            return res.status(404)
        }
    }

    // UPDATE REQ
    if(req.method === "PUT"){
        try {
            const newBlog = await Blog.update({username: session.user.email, _id: id},{
                username: session.user.email,
                title: req.body.title,
                body: req.body.body,
                image: req.body.image,
                tags: req.body.tags
            })
    
            return res.status(200).json("Blog Updated")
            
        } 
        catch (error) {
            return res.status(404)
        }
    }

    // DELETE REQ
    if(req.method === "DELETE"){
        try {
            const blog = await Blog.findOne({username: session.user.email, _id: id})
            await blog.delete()
            return res.status(200).json(blog, "Blog Deleted") 
        } 
        catch (error) {
            return res.status(404)
        }
    }
  }