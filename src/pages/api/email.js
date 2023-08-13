import { NextApiResponse, NextApiRequest } from "next";

export default function handler(req, res) {
  
  res.status(200).json({ name: 'name', email: 'email', location: 'location', phone: 'phone', subject: 'subject', message: 'message'});
}
