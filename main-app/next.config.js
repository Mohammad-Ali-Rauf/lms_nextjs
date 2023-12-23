/** @type {import('next').NextConfig} */

const connectDB = require('./lib/connectDB.ts')

connectDB();

const nextConfig = {}

module.exports = nextConfig
