import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Farmácia Popular</h1>

        <div className="flex gap-4">
          <Link to="/">Home</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar