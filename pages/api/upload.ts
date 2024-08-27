import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const file = req.body.file;
      const uploadResponse = await cloudinary.v2.uploader.upload(file, {
        upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
      });
      res.status(200).json(uploadResponse);
    } catch (error) {
      res.status(500).json({ error: 'Failed to upload file to Cloudinary' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
