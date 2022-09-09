//Hooks
import { useEffect } from "react";
import { useCrudTableStore } from "../../hooks/useCrudTableStore";

//Components
import { TableData } from "../../components/Table/TableData"


export const CustomersPage = () => {

  const { startLoadingTable } = useCrudTableStore();

  useEffect(() => {
    startLoadingTable('customers');
  }, [])

  return (
    
    <>
        <TableData />
    </>

  )
}
