import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <div className="h-screen bg-cover bg-home pt-8 flex justify-between flex-col w-full bg-red-400">
        <img src="UberLogo.svg" alt="Uber Logo" className="w-16 ml-8 filter-green" />
            <div className="bg-white pb-7 py-4 px-4 rounded-t-xl">
                
                <h2 className="flex justify-center text-3xl font-bold">
                 Get Started With Uber
                </h2>
                <Link to='/user-login' className="flex justify-center text-xl font-semibold hover:bg-gray-900 w-full bg-black text-white rounded-lg py-3 mt-4">Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home