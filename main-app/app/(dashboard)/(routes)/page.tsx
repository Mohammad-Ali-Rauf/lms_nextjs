import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl'>Home</h1>
      <Button className='bg-emerald-700 hover:bg-emerald-800 hover:text-white text-white' variant="outline" size="lg">Click me</Button>
    </div>
  )
}

export default Home