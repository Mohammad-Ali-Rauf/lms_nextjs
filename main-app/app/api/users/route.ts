import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'
const User = require('../../models/User.ts')

interface IUser {
	name: string
	email: string
	password: string
}

export async function GET() {
	const users = await User.find()
	return NextResponse.json(users)
}

export async function POST(req: NextRequest) {
	try {
		const { name, email, password }: IUser | any = req.body

		const hashedPassword = await bcrypt.hash(password, 30)

		const newUser = new User({
			name,
			email,
			password: hashedPassword,
		})

		await newUser.save()

		return NextResponse.json({ newUser, message: 'User created successfully' })
	} catch (err: unknown) {
		NextResponse.json({ error: err })
	}
}
