import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const resources = await cloudinary.v2.api.resources({
      type: 'upload',
      prefix: '',
    });
    res.status(200).json(resources.resources);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch files from Cloudinary' });
  }
}
