import { useMemo } from "react"


const ConfigNavigation = () => {
  const data=useMemo(()=>[
    {
        title:'Overview',
        path:'/'
    },
    {
        title:'Positions',
        path:'/positions'
    },
    {
        title:'Closed Positions',
        path:'/positions-closed'
    },
    {
        title:'P/L Report',
        path:'/profit-and-loss-report'
    },
    {
        title:'Add Fund',
        path:'/add-fund'
    },
    {
        title:'Team',
        path:'/team'
    },
  ],[])
  return data
}

export default ConfigNavigation
