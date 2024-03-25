import { Helmet } from "react-helmet-async"
import ClosedPositionsListVew from "../../section/closed-positions/view/ClosedPositionsTableView"

const ClosedPositions = () => {
  return (
    <>
    <Helmet>
      <title>Closed Positions</title>
    </Helmet>
    <ClosedPositionsListVew/>
    </>
  )
}

export default ClosedPositions
