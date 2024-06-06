import ContentfulImage from "../ui/ContentfulImage";

const Avatar = ({ name, picture }) => {
  return (
    <div className="flex items-center">
      <div className="relative w-10 h-10 mr-4">
        <ContentfulImage
          alt={name}
          src={picture.fields.file.url}
          layout="fill"
          className="rounded-full m-0"
        />
      </div>
      <div className="font-semibold">{name}</div>
    </div>
  );
};
export default Avatar;
