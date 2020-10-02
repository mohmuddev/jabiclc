import React, { useState, useEffect } from "react";
import "./Project.css";
import Icon from "@mdi/react";
import { mdiEyeOutline } from "@mdi/js";

const portfolio = [
  {
    name: "Reference App",
    class: "referenceApp",
    button: (
      <div className="buttons">
        <h4>Villa house</h4>
        <section>
          <a
            href="https://docs.mohamud.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon path={mdiEyeOutline} color="#4b4b4b" size={0.9} />
            Preview
          </a>
        </section>
      </div>
    ),
    category: ["all", "webapp"],
  },
  {
    name: "Web Agency",
    class: "webagency",
    button: (
      <div className="buttons">
        <h4>Transportaion</h4>
        <section>
          <a
            href="https://digitalagency.mohamud.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            <Icon path={mdiEyeOutline} color="#4b4b4b" size={0.9} />
            Preview
          </a>
        </section>
      </div>
    ),
    category: ["all", "landingPage"],
  },
  {
    name: "Happy New Year",
    class: "HappyNewYear ",
    button: (
      <div className="buttons">
        <h4>Vegatable logistics</h4>
        <section>
          <a
            href="https://ishraq-docs.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon path={mdiEyeOutline} color="#4b4b4b" size={1} />
            Preview
          </a>
        </section>
      </div>
    ),
    category: ["all", "webapp"],
  },

  {
    name: "Saas Newsletter ",
    class: "saas",
    button: (
      <div className="buttons">
        <h4>Truck rent</h4>
        <section>
          <a
            href="https://coronavirus.mohamud.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon path={mdiEyeOutline} color="#4b4b4b" size={0.9} />
            Preview
          </a>
        </section>
      </div>
    ),
    category: ["all", "webapp"],
  },
];



function Project() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <div className="Propect" id="Project">
      <h2>Explore Our <span>Work</span></h2>
      <div className="portfolio__labels">
        <span active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </span>
        <span active={filter === "webapp"} onClick={() => setFilter("webapp")}>
          Construction
        </span>
        <span
          active={filter === "landingPage"}
          onClick={() => setFilter("landingPage")}
        >
          Transport
        </span>
        <span
          active={filter === "html-email"}
          onClick={() => setFilter("html-email")}
        >
          Logistics
        </span>
        <span
          active={filter === "webdesign"}
          onClick={() => setFilter("webdesign")}
        >
          Car rent
        </span>
      </div>
      <div className="portfolio__container">
        {projects.map((item) =>
          item.filtered === true ? (
            <div key={item.name} className={item.class}>
              {item.button}
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Project;
