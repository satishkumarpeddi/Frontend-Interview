import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogsApi";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Textarea } from "../Components/ui/textarea";

const CreateBlog = () => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [descirption, setDescirption] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [author, setAuthor] = useState("");

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setTitle("");
      setContent("");
      setDescirption("");
      setAuthor("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ title, content, descirption, coverImage, author });
  };

  return (
    <Card className="max-w-xl mx-auto mt-6">
      <CardHeader>
        <CardTitle>Create Blog</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Input
            placeholder="Description"
            onChange={(e) => setDescirption(e.target.value)}
          />
          <Input
            placeholder="Image URL"
            onChange={(e) => setCoverImage(e.target.value)}
          />
          <Textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <Button
            type="submit"
            disabled={mutation.isPending}
            className="w-full bg-blue-300 text-white cursor-pointer hover:bg-blue-400"
          >
            {mutation.isPending ? "Creating..." : "Create Blog"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateBlog;
