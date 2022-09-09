import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { onOpenFeatureModal } from '../../../store/storeSlice';


export const Sidebar = () => {

const dispatch = useDispatch();

const handleLogout = () => {
    dispatch(onOpenFeatureModal());
}
  return (

<>
<aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>


        <div className="mt-8 text-center">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Emanuel Villalba</h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">

            <li>
                <NavLink  
                to="dashboard"
                className={ ({ isActive }) => [
                    "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group",
                    isActive ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400": null,
                ]
                .filter(Boolean)
                .join(" ")
                  }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="-mr-1 font-medium">Dashboard</span>
                </NavLink>
            </li>

            <li>
                <NavLink  
                to="customers"
                className={ ({ isActive }) => [
                    "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group",
                    isActive ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400": null,
                ]
                .filter(Boolean)
                .join(" ")
                  }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="-mr-1 font-medium">Customers</span>
                </NavLink>
            </li>

            <li>
                <NavLink  
                to="orders"
                className={ ({ isActive }) => [
                    "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group",
                    isActive ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400": null,
                ]
                .filter(Boolean)
                .join(" ")
                  }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg> 
                    <span className="-mr-1 font-medium">Orders</span>
                </NavLink>
            </li>

            <li>
                <NavLink    
                to="products"
                className={ ({ isActive }) => [
                    "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group",
                    isActive ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400": null,
                ]
                .filter(Boolean)
                .join(" ")
                  }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="-mr-1 font-medium">Products</span>
                </NavLink>
            </li>

        </ul>
    </div>

    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
        onClick={handleLogout}>

            <span className="group-hover:text-gray-700">Logout</span>
        </button>
    </div>
</aside>
</>
  )
}
