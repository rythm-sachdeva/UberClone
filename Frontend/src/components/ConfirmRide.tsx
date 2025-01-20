

const ConfirmRide = ({setConfirmPanel,setWaitPanel}:{setConfirmPanel:any,setWaitPanel:any}) => {
  return (
    <div className="" >
        
        <div className=" flex justify-between">
        <h3 className="font-semibold text-2xl">Confirm Your Ride</h3>
            <h2 onClick={()=>{setConfirmPanel(false)
            }} className="text-2xl"><i className="ri-arrow-down-wide-line"></i></h2>
        </div>
         <div className="flex justify-between flex-col items-center">
         <img className="h-20 mb-3" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="uber car" />
          <div className="w-full">
            <div className="flex items-center gap-5 p-3 border-t-2">
            <i className="ri-map-pin-2-fill text-2xl"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankariya Talab,Ahemdabad</p>
            </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-t-2">
            <i className="ri-map-pin-user-fill text-2xl"></i>
            <div >
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankariya Talab,Ahemdabad</p>
            </div>
              
            </div>
            <div className="flex items-center gap-5 p-3 border-t-2">
            <i className="ri-currency-line text-2xl"></i>
            <div >
              <h3 className="text-lg font-medium">543</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
              
            </div>
          </div>
          <button onClick={()=>{ setConfirmPanel(false)
            setWaitPanel(true)}} className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg active:bg-green-600/75">
            Confirm
          </button>
         </div>
          
    </div>
  )
}

export default ConfirmRide