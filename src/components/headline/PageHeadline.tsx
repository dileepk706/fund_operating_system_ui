import Typography from "../typography/Typography";

type Props = {
  heading: string;
};
const PageHeadline = ({ heading }: Props) => {
  return (
    <div
      style={{
        marginBottom: "30px",
      }}
    >
      <Typography gutterBottom variant="subtitle2">
        {heading}
      </Typography>
    </div>
  );
};

export default PageHeadline;
