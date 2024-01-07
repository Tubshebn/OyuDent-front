import PostsLayout from "src/layouts/posts/page";
import ElearningPostsView from "src/sections/_elearning/view/elearning-posts-view";

// ----------------------------------------------------------------------
export const metadata = {
  title: "Блог",
};

export default function PostsPage() {
  return (
    <PostsLayout>
      <ElearningPostsView />
    </PostsLayout>
  );
}
