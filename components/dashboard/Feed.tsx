"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Post = {
  id: string;
  content: string;
  user_email: string;
  created_at: string;
};

export default function Feed() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  async function loadPosts() {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setPosts(data);
    }
  }

  async function createPost() {
    if (!content.trim()) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first.");
      return;
    }

    const { error } = await supabase.from("posts").insert({
      content: content,
      user_email: user.email!,
    });

    if (error) {
      alert(error.message);
      return;
    }

    setContent("");
    loadPosts();
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <main
      style={{
        flex: 1,
        padding: "25px",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <h2>Create Post</h2>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          style={{
            width: "100%",
            height: "100px",
            padding: "10px",
            marginTop: "10px",
          }}
        />

        <button
          onClick={createPost}
          style={{
            marginTop: "15px",
            background: "#16a34a",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Post
        </button>
      </div>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "15px",
          }}
        >
          <h4>{post.user_email}</h4>

          <p>{post.content}</p>

          <small>
            {new Date(post.created_at).toLocaleString()}
          </small>
        </div>
      ))}
    </main>
  );
            }
