const HeadingPost = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-4 border-b-2 pb-3">
      <img src="https://via.placeholder.com/70" alt="blog" />
      <div className=" text-lg font-semibold">{title}</div>
    </div>
  );
};

export const TopPosts = () => {
  return (
    <div>
      <div className=" text-4xl mb-5">TOP POSTS</div>
      <div className="flex flex-col gap-5">
        <HeadingPost title="Post Event Survey Questions" />
        <HeadingPost title="Welcome to Blogxpress" />
        <HeadingPost title="How to Write a Blog Post" />
        <HeadingPost title="How to sell tickets on your webiste" />
      </div>
    </div>
  );
};
