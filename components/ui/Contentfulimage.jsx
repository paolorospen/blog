import Image from "next/image";

//try

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Contentfulimage = (props) => {
  return <Image loader={contentfulLoader} {...props} />;
};
export default Contentfulimage;
