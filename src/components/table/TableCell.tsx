
type Props={
  style?:React.CSSProperties
  children:React.ReactNode
}
function TableCell({children,style}:Props) {
  return (
    <td
    style={{
      padding: "8px",
      textAlign: "left",
      borderBottom: "1px solid #ddd",
      ...style
    }}
  >
    {children}
  </td>
  )
}

export default TableCell
