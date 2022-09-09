//Hooks
import { useDispatch, useSelector } from 'react-redux'

//Components
import { GlobalFilter } from '../../../components/Table/GlobalFilter'
import { ContainerPage } from './ContainerPage'

//Dispatchs
import { onOpenFeatureModal } from '../../../store/storeSlice'




export const Navbar = () => {

const {actualPage} = useSelector ( state => state.storeData)
const dispatch = useDispatch();

const pageName = () => {
        switch (actualPage) {
            case 'dashboard': return "Dashboard"
            case 'customers': return "Customers"
            case 'orders'   : return "Orders"
            case 'products' : return "Products"
            
        
            default:
                break;
        }
    }

const handleClick = () => {
    dispatch(onOpenFeatureModal());
}
  return (
    <>
        <div className="ml-auto  mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div className="sticky z-40 top-0 h-16 border-b bg-white lg:py-2.5">
                    <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">{pageName()}</h5>
                        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <div className="flex space-x-4">
                        {/*  <!--search bar --> */}
                            <GlobalFilter />
                            {/*  <!--search bar --> */}
                           
                            <button aria-label="chat" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
                            onClick={handleClick}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </button>
                            <button aria-label="notification" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
                            onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <ContainerPage/>

        </div>
    </>
  )
}
