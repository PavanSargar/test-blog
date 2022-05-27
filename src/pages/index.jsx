import * as React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PostsCard from "../components/PostsCard";

import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = ({ data }) => {
  const posts = data.posts.nodes;
  return (
    <Layout>
      <Navbar />
      <div className="blog-posts">
        {posts.map((post) => (
            <PostsCard
              key={post.id}
              link={post.frontmatter.path}
              author={post.frontmatter.author}
              date={post.frontmatter.date}
              quote={post.frontmatter.quote}
              thumbnail={post.frontmatter.thumbnail}
              title={post.frontmatter.title}
            />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query blogPosts {
    posts: allMarkdownRemark {
      nodes {
        frontmatter {
          date(fromNow: true)
          path
          title
          author
          thumbnail
          quote
        }
        id
      }
    }
  }
`;
