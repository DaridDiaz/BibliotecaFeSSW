import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { privateAxios } from '../../../Lib/apiClient';

import Empleados from './Empleados';
import Loading from '../../UX/Loading/Loading';

const EmpleadosPage = ()=>{
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      const loadData = async ()=> {
        dispatch({type:'EMPLEADOS_LOADING', payload:{}});
        try {
          const { data: {empleados,  status}} = await privateAxios.get('/api/v1/empleados/all');
          dispatch({type:'EMPLEADOS_SUCCESS', payload: {empleados}});
        } catch(ex){
          console.log(ex);
          dispatch({ type: 'EMPLEADOS_FAILED', payload: {} });
        }
      }
      loadData();
    }
    ,[]
  );
  const { empleados, isLoading, errors } = useSelector(state=>state.empleados);
  return (
    <>
      {isLoading && (<Loading />)}
      <Empleados empleados={empleados} />
    </>
  )
}

export default EmpleadosPage;
