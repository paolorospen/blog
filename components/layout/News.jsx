import PostCard from "@/components/posts/PostCard";

const News = ({ posts }) => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Latest blog posts
          </h1>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default News;
