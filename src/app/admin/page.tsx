"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Editor from "@/components/editor-component";

export default function AdminCMS() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogExcerpt, setBlogExcerpt] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "First Blog",
      excerpt: "This is the first blog",
      content: "Content here",
    },
    {
      id: 2,
      title: "Second Blog",
      excerpt: "This is the second blog",
      content: "More content here",
    },
  ]);
  const [comments, setComments] = useState([
    { id: 1, blogId: 1, content: "Great blog!", approved: true },
    { id: 2, blogId: 1, content: "Nice content", approved: false },
    { id: 3, blogId: 2, content: "Interesting read", approved: true },
  ]);

  const handleCreateBlog = () => {
    const newBlog = {
      id: blogs.length + 1,
      title: blogTitle,
      excerpt: blogExcerpt,
      content: blogContent,
    };
    setBlogs([...blogs, newBlog]);
    setBlogTitle("");
    setBlogExcerpt("");
    setBlogContent("");
  };

  const handleDeleteBlog = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleApproveComment = (id: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, approved: !comment.approved }
          : comment
      )
    );
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Admin CMS</h1>
      <Tabs defaultValue="create" className="space-y-4">
        <TabsList>
          <TabsTrigger value="create">Create Blog</TabsTrigger>
          <TabsTrigger value="manage">Manage Blogs</TabsTrigger>
          <TabsTrigger value="comments">Manage Comments</TabsTrigger>
        </TabsList>
        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Create New Blog</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCreateBlog();
                }}
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    placeholder="Enter blog title"
                  />
                </div>
                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={blogExcerpt}
                    onChange={(e) => setBlogExcerpt(e.target.value)}
                    placeholder="Enter blog excerpt"
                  />
                </div>
                <div>
                  <Label htmlFor="excerpt">Content</Label>
                  <Editor />
                </div>
                <Button type="submit">Create Blog</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="manage">
          <Card>
            <CardHeader>
              <CardTitle>Manage Blogs</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Excerpt</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogs.map((blog) => (
                    <TableRow key={blog.id}>
                      <TableCell>{blog.title}</TableCell>
                      <TableCell>{blog.excerpt}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="mr-2">
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteBlog(blog.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="comments">
          <Card>
            <CardHeader>
              <CardTitle>Manage Comments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Blog ID</TableHead>
                    <TableHead>Content</TableHead>
                    <TableHead>Approved</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comments.map((comment) => (
                    <TableRow key={comment.id}>
                      <TableCell>{comment.blogId}</TableCell>
                      <TableCell>{comment.content}</TableCell>
                      <TableCell>
                        <Switch
                          checked={comment.approved}
                          onCheckedChange={() =>
                            handleApproveComment(comment.id)
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="mr-2">
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteComment(comment.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
