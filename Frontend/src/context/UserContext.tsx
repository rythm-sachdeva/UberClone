import { createContext, useState } from "react"

import { User , UserContextInterface} from "../../lib/user.interfaces.ts"



export const UserDataContext = createContext<UserContextInterface | undefined>(undefined)


const UserContext = ({children}:{children:any}) => {
    const [user ,setUser] = useState<User|any>({
        fullname:{
            firstName:'',
            lastName:''
        },
        email:'',
    })
  return (
    <div>
     <UserDataContext.Provider value={{user,setUser}}>
        {children}
     </UserDataContext.Provider>
    </div>
  )
}

export default UserContext