import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { IconInstagram, IconMail, IconFacebook } from "@components/icons";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      about: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/about/" } }
      ) {
        edges {
          node {
            frontmatter {
              name
              title
            }
            html
          }
        }
      }
    }
  `);

  const aboutsData = data.about.edges;

  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <aside aria-label="Sidebar">
      {aboutsData &&
        aboutsData.map(({ node }, i: number) => {
          const { frontmatter } = node;
          const { name, title } = frontmatter;
          return (
            <div key={i}>
              <div id="about-me">
                <div className="text-3xl font-bold">
                  <Link to="/"> {name}</Link>
                </div>
                <div className="text-xs text-gray my-3">{title}</div>
              </div>
              <div className="md:block">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  className="my-work my-2"
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="list-works"
                  >
                    <div className="text-sm font-europa">Photography</div>
                  </AccordionSummary>
                  <AccordionDetails className="list">
                    <div className="text-sm font-europa my-2">
                      <Link to="/"> PLAYGROUNDS</Link>
                    </div>
                  </AccordionDetails>
                  <AccordionDetails className="list">
                    <div className="text-sm font-europa my-2">
                      <Link to="/friends"> FRIENDS</Link>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <div className="text-sm my-2">
                  <Link to="/about">About</Link>
                </div>
                <div className="text-sm my-2">Contact</div>
              </div>
              <div id="my-social" className="flex flex-row my-3">
                <div className="mr-3">
                  <Link to="https://www.facebook.com/nhan3112/">
                    <IconFacebook />
                  </Link>
                </div>
                <div className="mr-3">
                  <Link to="https://www.instagram.com/nathan.newyen/">
                    <IconInstagram />
                  </Link>
                </div>
                <div className="mr-3">
                  <a href={`mailto:nathan@nathannewyen.com`}>
                    <IconMail />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </aside>
  );
};

export default Sidebar;
