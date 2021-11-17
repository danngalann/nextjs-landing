/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 315360000,
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dyymism4o/image/upload',
},
}
