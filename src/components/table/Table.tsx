export type Props = {
  children: React.ReactNode 
};

const Table = ({ children }: Props) => {
  return (
    <div
      style={{
        maxWidth: "100%",
        overflowX: "scroll",
      }}
    >
      <table style={{ width: "100%", tableLayout: "auto" }}>{children}</table>
    </div>
  );
};

export default Table;
