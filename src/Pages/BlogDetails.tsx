import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/blogsApi";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  });
  if (isLoading) return <p>Loading blog...</p>;
  if (error) return <p>Error loading blog</p>;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data!.title}</CardTitle>
        <CardDescription></CardDescription>
        <CardAction>{data!.author}</CardAction>
      </CardHeader>
      <CardContent>{data!.content}</CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default BlogDetails;
