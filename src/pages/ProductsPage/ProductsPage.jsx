//Hooks
import { useEffect } from "react";
import { useCrudTableStore } from "../../hooks/useCrudTableStore";

//Components
import { TableData } from "../../components/Table/TableData"


export const ProductsPage = () => {

  const { startLoadingTable } = useCrudTableStore();

  useEffect(() => {
    startLoadingTable('products');
  }, [])
  
  return (
    
    <>
        <TableData />   
    </>

    
    
    
    
  )
}
