import CustomLink from "../link/Link";
import Typography from "../typography/Typography";

type Props = {
  link: string;
  text: string;
};
function LinkToAnotherSiteCell({ link, text }: Props) {
  const handleOpenLink = (url: string) => {
    console.log(url);

    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <CustomLink to="">
      <div
        onClick={() => {
          handleOpenLink(link);
        }}
      >
        <Typography variant="captionUltra" noWrap>
          {text}
        </Typography>
      </div>
    </CustomLink>
  );
}

export default LinkToAnotherSiteCell;
