

const Waitfordriver = ({setWaitPanel,setdriverFound}:{setWaitPanel:any,setdriverFound:any}) => {
    return (
      <div className="" >
          
          <div className=" flex justify-between">
          <h3 className="font-semibold text-2xl">Looking For Driver</h3>
              <h2 onClick={()=>{setWaitPanel(false)
               setdriverFound(true)
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
           </div>
            
      </div>
    )
  }
  
  export default Waitfordriver