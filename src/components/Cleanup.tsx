import { useState, useEffect } from "react";
import { fetchPosts } from "../requests";
import type { IPost, SuccessOrErrorResponse } from "../types";
import DataPlaceHolder from "./DataPlaceHolder";

const Cleanup = () => {
  // State to store posts and handle API response structure
  const [posts, setPosts] = useState<SuccessOrErrorResponse<IPost[]>>(
    {} as SuccessOrErrorResponse<IPost[]>
  );

  // State to track loading status
  const [loading, setLoading] = useState(true);

  // Fetch posts when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPosts(); // API call
      setPosts(response); // Store result
      setLoading(false); // Mark loading as done
    };
    fetchData();
  }, []);

  // Show loading placeholder
  if (loading) {
    return <DataPlaceHolder message="Loading..." />;
  }

  // Show error placeholder if request failed
  if (!posts.success) {
    return <DataPlaceHolder message={posts.message} />;
  }

  // Show default placeholder if no data
  if (posts.data.length === 0) {
    return <DataPlaceHolder />;
  }

  // Render list of posts (up to 5) in a responsive grid
  return (
    <div>
      <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.data.slice(0, 5).map((post) => (
          <li
            key={post.id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-100"
          >
            <article>
              <h2 className="font-bold text-lg mb-2 text-gray-900">
                {post.title}
              </h2>
              <p className="text-gray-700">{post.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cleanup;
