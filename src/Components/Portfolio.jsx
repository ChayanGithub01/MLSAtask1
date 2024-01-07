/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/astronaut1.jpg";

const imageAltText = "Astronaut and Moon background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "This is my educational website for technology enthusiasts",
    description:
      "Welcome to our educational hub tailored for technology enthusiasts, where knowledge meets passion. Dive into a world of cutting-edge insights and empowering resources to fuel your tech journey on our dedicated website.",
    url: "https://chayandas07.github.io/Quality_Education/home.html",
  },
  {
    title: "My Blog Website 🎉",
    description:
      "Unlocking the Power of APIs: Insights from the API 101 using Postman Workshop.",
    url: "https://theworldofapis101.blogspot.com/2023/10/unlocking-power-of-apis-insights-from.html",
  },
  {
    title: "My  Site",
    description:
      "Explore boundless possibilities at my website, where innovation and information converge to empower your tech-centric journey.",
    url: "https://sites.google.com/view/techworldtech",
  },
  {
    title: "Netflix Website clone",
    description:
      "Demonstrated how to create a clone of the Netflix website",
    url: "https://youtu.be/ySYkM8Gmun8",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
