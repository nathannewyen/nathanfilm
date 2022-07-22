import React from "react";
import { Sidebar } from "@components/section";
import { useStaticQuery, graphql } from "gatsby";

const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/profile/" } }
      ) {
        edges {
          node {
            frontmatter {
              name
              title
              cover
            }
            html
          }
        }
      }
    }
  `);

  const aboutsData = data.profile.edges;

  return (
    <div className="flex flex-row">
      {aboutsData &&
        aboutsData.map(({ node }, i: number) => {
          const { frontmatter } = node;
          const { name, title, cover } = frontmatter;
          return (
            <div key={i}>
              <div className="text-sm text-gray mb-5">
                <img src={cover} alt="profile" />
              </div>
              <div className="sm:text-sm md:text-base text-gray mb-5 mt-8"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Works;
