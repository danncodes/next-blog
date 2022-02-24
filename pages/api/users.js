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
        console.log("POST REQ")
    }
  }
  