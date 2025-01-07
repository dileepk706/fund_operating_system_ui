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
        title:'Transactions Timeline',
        path:'/transactions-history'
    },
    {
        title:'Team',
        path:'/team'
    },
    {
        title:'Logout',
        path:'/logout'
    },
  ],[])
  return data
}

export default ConfigNavigation
