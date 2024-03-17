import { Helmet } from "react-helmet-async"
import PositionsListVew from "../../section/positions/view/PositionsListVew"

const Positions = () => {
  return (
    <>
    <Helmet>
      <title>Positions</title>
    </Helmet>
    <PositionsListVew/>
    </>
  )
}

export default Positions
