import { createContext, useState } from 'react'

export const CaptainDataContext = createContext<any>(undefined)

export const CaptainContext = ({children}:{children:any}) => {
    const [captaindata,setCaptainData] = useState<any>({
        fullname: {
            firstname: "",
            lastname: ""
          },
          email: "",
          password: "",
          vehicle: {
            color: "",
            plate: "",
            capacity: "",
            vehicleType: ""
          }

    })
  return (
    <CaptainDataContext.Provider value={{captaindata,setCaptainData}}>
        {children}
    </CaptainDataContext.Provider>
  )
}

