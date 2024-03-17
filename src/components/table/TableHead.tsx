import TableRow from "./TableRow";

type Props = {
  labels: string[];
};
function TableHead({ labels }: Props) {
  return (
    <thead>
      <TableRow>
        {labels.map((e,i) => (
          <th
            style={{
              padding: "11px",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
              backgroundColor: "#f2f2f2",
            }}
            key={i}
          >
            {e}
          </th>
        ))}
      </TableRow>
    </thead>
  );
}

export default TableHead;
