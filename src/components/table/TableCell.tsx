import { Props } from './Table'

function TableCell({children}:Props) {
  return (
    <td
    style={{
      padding: "8px",
      textAlign: "left",
      borderBottom: "1px solid #ddd",
    }}
  >
    {children}
  </td>
  )
}

export default TableCell
