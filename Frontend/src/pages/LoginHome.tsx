import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const LoginHome = () => {
    const [pickUpLocation, setPickUpLocation] = useState<string>("")
    const [destination, setDestination] = useState<string>("")
    const [openPannel, setOpenPannel] = useState<boolean>(false)
    const pannelRef = useRef<HTMLDivElement>(null)
    const pannelCloseRef = useRef<HTMLHeadingElement>(null)

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }

    useGSAP(function (){
       if(openPannel){
        gsap.to(pannelRef.current,{
            height:'70%'
        })
        gsap.to(pannelCloseRef.current,{
            opacity:1
        })
       }
       else{
        gsap.to(pannelRef.current,{
            height:0
        })
        gsap.to(pannelCloseRef.current,{
            opacity:0
        })  
       }
    },[openPannel])

  return (
    <div className="h-screen relative">
        <img src="UberLogo.svg" alt="Uber Logo" className="w-16 absolute left-3 top-5" />
        <div className="h-screen w-screen">
            <img className="h-full w-full object-cover" src="https://i0.wp.com/www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png?fit=493%2C383&ssl=1" alt="maps image" />
        </div>
        <div className="flex flex-col justify-end h-screen absolute top-0 w-full ">
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

            </div>
        </div>
    </div>
  )
}

export default LoginHome