import { ColorSchema } from "../../theme";
import { getDate, getTime } from "../../utils/helpers";
import Typography from "../typography/Typography";

type Props = {
  date: Date | number;
};
const DateTableField = ({ date }: Props) => {
  return (
    <div className="flex flex-col " style={{ gap: 2 }}>
      <Typography noWrap variant="captionUltra">{getDate(date)}</Typography>
      <Typography noWrap variant="small" style={{color:ColorSchema().GREY[500]}} >{getTime(date)}</Typography>
    </div>
  );
};

export default DateTableField;
