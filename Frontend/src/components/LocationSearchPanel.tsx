
const LocationSearchPanel = ({setVehicle,setOpenPannel}:{setVehicle:any,setOpenPannel:any}) => {
  return (
    <div>
        {/* just sample data for testing */}
        <div onClick={()=>{setVehicle(true)
            setOpenPannel(false)
        }} className="flex items-center justify-start my-4 gap-2">
         <h2 className="flex items-center h-10 w-10 rounded-full justify-center bg-[#eee]"><i className="ri-map-pin-fill"></i></h2>
         <h4 className="font-medium">BF 54 Madangir New Delhi</h4>
         </div>
    </div>
  )
}

export default LocationSearchPanel