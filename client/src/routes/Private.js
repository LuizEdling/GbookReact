import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/auth'

export default function Private({ children, requiredType }){
  const { signed, loading, user } = useContext(AuthContext);

  if(loading){
    return(
      <div></div>
    )
  }

  if(!signed){
    return  <Navigate to="/" />
  }

  if (requiredType && user?.user_type !== requiredType) {
    return <Navigate to="*" />;
  }

  return children;
}