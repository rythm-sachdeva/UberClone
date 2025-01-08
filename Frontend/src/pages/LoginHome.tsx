import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import LocationSearchPanel from "../components/LocationSearchPanel"

const LoginHome = () => {
    const [pickUpLocation, setPickUpLocation] = useState<string>("")
    const [destination, setDestination] = useState<string>("")
    const [openPannel, setOpenPannel] = useState<boolean>(false)
    const pannelRef = useRef<HTMLDivElement>(null)
    const pannelCloseRef = useRef<HTMLHeadingElement>(null)
    const vehiclePanelRef = useRef<HTMLDivElement>(null)
    const [vehiclePanel,setVehiclepanel] = useState<boolean>(false)

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }

    useGSAP(function (){
       if(openPannel){
        gsap.to(pannelRef.current,{
            height:'70%',
            padding:24
        })
        gsap.to(pannelCloseRef.current,{
            opacity:1,
            
        })
       }
       else{
        gsap.to(pannelRef.current,{
            height:0,
            padding:0
        })
        gsap.to(pannelCloseRef.current,{
            opacity:0
        })  
       }
    },[openPannel])

    useGSAP(function(){
     if(vehiclePanel)
         {
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(0)'
            })
         }
        else
        {
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehiclePanel])

  return (
    <div className="h-screen relative overflow-hidden">
        <img src="UberLogo.svg" alt="Uber Logo" className="w-16 absolute left-3 top-5" />
        <div className="h-screen w-screen">
            <img className="h-full w-full object-cover" src="https://i0.wp.com/www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png?fit=493%2C383&ssl=1" alt="maps image" />
        </div>
        <div className="flex flex-col justify-end h-screen absolute top-0 w-full  ">
            <div className="bg-white  p-5 h-[30%] relative">
                 <h5 ref={pannelCloseRef} className="absolute top-3 right-3 text-2xl font-semibold" onClick={()=>{setOpenPannel(false)}}>
                    <i className="ri-arrow-down-wide-line"></i>
                 </h5>
            <h4 className="text-2xl font-semibold">Find a Trip</h4>
            <form action="" onSubmit={(e)=>{submitHandler(e)}} className="focus:border-orange-400">
                <input 
                className="bg-[#eeeeee]  w-full text-base rounded-lg p-3 placeholder:p-4 mt-3" 
                type="text" 
                value={pickUpLocation}
                onClick={()=>{setOpenPannel(true)}}
                onChange={(e)=>{setPickUpLocation(e.target.value)}}
                placeholder="Add a Pick Up Location"/>
                <input 
                className="bg-[#eeeeee] w-full text-base rounded-lg p-3 placeholder:p-4 mt-3" 
                type="text" 
                onClick={()=>{setOpenPannel(true)}}
                value={destination}
                onChange={(e)=>{setDestination(e.target.value)}}
                placeholder="Enter a Destination"/>
            </form>
            </div>
            <div ref={pannelRef} className="bg-white  h-0">
                <LocationSearchPanel setVehicle={setVehiclepanel} setOpenPannel={setOpenPannel}/>
            </div>
        </div>
        <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full ">
            <h3 className="font-semibold text-2xl mb-5">Choose a vehicle</h3>
            <div className="flex w-full mb-3 p-3 border-2 border-[#eee] active:border-black rounded-xl items-center justify-between ">
                <img className="h-[4rem]" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="uber car" />
                <div className="w-1/2 ml-2">
                   <h4 className="font-medium text-sm"> Uber Go <span><i className="ri-user-fill"></i>4</span> </h4>
                   <h5 className="font-medium text-sm">5 Mins away</h5>
                   <p className="font-normal text-gray-600 text-xs">Affordable compact rides</p>
                </div>
                <h2 className="text-xl font-semibold">₹193.20</h2>
            </div>
            <div className="flex w-full mb-3 p-3 border-2 border-[#eee] active:border-black  rounded-xl items-center justify-between">
                <img className="h-[4rem]" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="uber car" />
                <div className="w-1/2 ml-2">
                   <h4 className="font-medium text-sm">Uber Moto<span><i className="ri-user-fill"></i>1</span> </h4>
                   <h5 className="font-medium text-sm">5 Mins away</h5>
                   <p className="font-normal text-gray-600 text-xs">Affordable compact rides</p>
                </div>
                <h2 className="text-xl font-semibold">₹193.20</h2>
            </div>
            <div className="flex w-full mb-3 p-3 border-2 border-[#eee] active:border-black  rounded-xl items-center justify-between">
                <img className="h-[4rem]" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="uber car" />
                <div className="w-1/2 ml-2">
                   <h4 className="font-medium text-sm">Uber Auto<span><i className="ri-user-fill"></i>2</span> </h4>
                   <h5 className="font-medium text-sm">5 Mins away</h5>
                   <p className="font-normal text-gray-600 text-xs">Affordable compact rides</p>
                </div>
                <h2 className="text-xl font-semibold">₹193.20</h2>
            </div>
        </div>
    </div>
  )
}

export default LoginHome