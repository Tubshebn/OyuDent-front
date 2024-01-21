import PostLayout from "src/layouts/post/page";
import ElearningPostView from "src/sections/_elearning/view/elearning-post-view";

// ----------------------------------------------------------------------

export const metadata = {
  title: "Мэдээлэл",
};

export default function ElearningPostPage() {
  return (
    <PostLayout>
      <ElearningPostView />;
    </PostLayout>
  );
}
