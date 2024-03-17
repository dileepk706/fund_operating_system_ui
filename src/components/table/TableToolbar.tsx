type Props = {
  children: React.ReactNode;
};
const TableToolbar = ({ children }: Props) => {
  return (
    <div
      className="flex"
      style={{
        justifyContent: "end",
        alignItems: "center",
        gap: "30px",
      }}
    >
      {children}
    </div>
  );
};

export default TableToolbar;
