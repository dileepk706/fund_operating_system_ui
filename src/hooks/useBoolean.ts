import { useCallback, useState } from "react"

const useBoolean = () => {
  const [value,setValue]=useState(false)

  const onTrue=useCallback(()=>{
    setValue(true)
  },[])
  
  const onFalse=useCallback(()=>{
    setValue(false)
  },[])

  const onToggle=useCallback(()=>{
    setValue(prev=>!prev)
  },[])

  return{
    onFalse,onToggle,onTrue, value
  }
}

export default useBoolean
