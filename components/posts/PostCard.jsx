import Link from "next/link";
import Avatar from "@/components/ui/Avatar";
import DateComponent from "@/components/ui/DateComponent";
import Contentfulimage from "@/components/ui/Contentfulimage.jsx";

const PostCard = ({ post }) => {
  const { title, slug, excerpt, coverImage, author, date } = post.fields;

  return (
    <li className="rounded-md overflow-hidden shadow-md">
      <Link href={`/posts/${slug}`} aria-label={title}>
        <div className="mb-2">
          <Contentfulimage
            alt={`Cover Image for ${title}`}
            src={coverImage.fields.file.url}
            width={coverImage.fields.file.details.image.width}
            height={coverImage.fields.file.details.image.height}
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl mb-1 leading-snug">{title}</h3>
          <div className="text-sm mb-4 text-gray-600">
            <DateComponent dateString={date} />
          </div>
          <p className="text-base mb-4">{excerpt}</p>
          <Avatar name={author.fields.name} picture={author.fields.picture} />
        </div>
      </Link>
    </li>
  );
};
export default PostCard;
