import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import LocationSearchPanel from "../components/LocationSearchPanel"
import ChooseVehicle from "../components/ChooseVehicle"
import ConfirmRide from "../components/ConfirmRide"
import Waitfordriver from "../components/Waitfordriver"

const LoginHome = () => {
    const [pickUpLocation, setPickUpLocation] = useState<string>("")
    const [destination, setDestination] = useState<string>("")
    const [openPannel, setOpenPannel] = useState<boolean>(false)
    const pannelRef = useRef<HTMLDivElement>(null)
    const pannelCloseRef = useRef<HTMLHeadingElement>(null)
    const vehiclePanelRef = useRef<HTMLDivElement>(null)
    const [vehiclePanel,setVehiclepanel] = useState<boolean>(false)
    const confirmRidePanel = useRef<HTMLDivElement>(null)
    const [confirmPanel,setConfirmpanel] = useState<boolean>(false)
    const waitDriverRef = useRef<HTMLDivElement>(null)
    const [waitPanel,setWaitPanel] = useState<boolean>(false)

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

    useGSAP(function(){
        if(confirmPanel)
            {
               gsap.to(confirmRidePanel.current,{
                   transform:'translateY(0)'
               })
            }
           else
           {
               gsap.to(confirmRidePanel.current,{
                   transform:'translateY(100%)'
               })
           }
       },[confirmPanel])

       useGSAP(function(){
        if(waitPanel)
            {
               gsap.to(waitDriverRef.current,{
                   transform:'translateY(0)'
               })
            }
           else
           {
               gsap.to(waitDriverRef.current,{
                   transform:'translateY(100%)'
               })
           }
       },[waitPanel])



  return (
    <div className="h-screen relative overflow-hidden ">
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
            <ChooseVehicle setConfirmPanel={setConfirmpanel} setVehiclepanel={setVehiclepanel}/>
        </div>
        <div ref={confirmRidePanel} className="fixed w-full z-10 bottom-0 bg-white px-3 py-6">
          <ConfirmRide setConfirmPanel={setConfirmpanel} setWaitPanel={setWaitPanel}  />
        </div>
        <div ref={waitDriverRef} className="fixed w-full z-10 bottom-0 bg-white px-3 py-6">
          <Waitfordriver setWaitPanel={setWaitPanel} />
        </div>
    </div>
  )
}

export default LoginHome