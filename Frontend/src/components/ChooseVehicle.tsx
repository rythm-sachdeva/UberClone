

const ChooseVehicle = ({setVehiclepanel,setConfirmPanel}:{setVehiclepanel:any,setConfirmPanel:any}) => {
  return (
    <>
    <div className="flex justify-between">
            <h3 className="font-semibold text-2xl mb-5">Choose a vehicle</h3>
            <h2 onClick={()=>{setVehiclepanel(false)
            }} className="text-2xl"><i className="ri-arrow-down-wide-line"></i></h2>
            </div>
            <div onClick={()=>{setVehiclepanel(false)
              setConfirmPanel(true)}} className="flex w-full mb-3 p-3 border-2 border-[#eee] active:border-black rounded-xl items-center justify-between ">
                <img className="h-[4rem]" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="uber car" />
                <div className="w-1/2 ml-2">
                   <h4 className="font-medium text-sm"> Uber Go <span><i className="ri-user-fill"></i>4</span> </h4>
                   <h5 className="font-medium text-sm">5 Mins away</h5>
                   <p className="font-normal text-gray-600 text-xs">Affordable compact rides</p>
                </div>
                <h2 className="text-xl font-semibold">₹193.20</h2>
            </div>
            <div onClick={()=>{setVehiclepanel(false)
              setConfirmPanel(true)}} className="flex w-full mb-3 p-3 border-2 border-[#eee] active:border-black  rounded-xl items-center justify-between">
                <img className="h-[4rem]" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="uber car" />
                <div className="w-1/2 ml-2">
                   <h4 className="font-medium text-sm">Uber Moto<span><i className="ri-user-fill"></i>1</span> </h4>
                   <h5 className="font-medium text-sm">5 Mins away</h5>
                   <p className="font-normal text-gray-600 text-xs">Affordable compact rides</p>
                </div>
                <h2 className="text-xl font-semibold">₹193.20</h2>
            </div>
            <div onClick={()=>{setVehiclepanel(false)
              setConfirmPanel(true)}} className="flex w-full mb-3 p-3 border-2 border-[#eee] active:border-black  rounded-xl items-center justify-between">
                <img className="h-[4rem]" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="uber car" />
                <div className="w-1/2 ml-2">
                   <h4 className="font-medium text-sm">Uber Auto<span><i className="ri-user-fill"></i>2</span> </h4>
                   <h5 className="font-medium text-sm">5 Mins away</h5>
                   <p className="font-normal text-gray-600 text-xs">Affordable compact rides</p>
                </div>
                <h2 className="text-xl font-semibold">₹193.20</h2>
            </div>
    </>
  )
}

export default ChooseVehicle