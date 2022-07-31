import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
//Plugins
import "../plugins/fontawesome-free/css/all.min.css";

//images
//import source from '../images/image.webp'

//container-dark
//container-light

const Home = () => {
  let Theme = localStorage.getItem("theme");
  const [isDark, setTheme] = useState(false);
  const [data, setData] = useState([]);
  const [record, setRecord] = useState(false);

  const toggleTheme = () => {
    setTheme(() => (isDark === true ? false : true));

    if (Theme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  let dataClass = "";
  if (!Theme) {
    dataClass = "container-light";
  } else {
    if (Theme === "dark") {
      dataClass = "container-dark";
    } else {
      dataClass = "container-light";
    }
  }

  useEffect(() => {
    const postres = {
      posts: "req",
    };

    const reqData = async () => {
      await fetch("http://localhost/apis/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(postres),
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setRecord(true);
        });
    };
    reqData();
  }, []);

  function facebook() {
    window.location.href = "https://facebook.com/noel.mallari.5648137";
  }

  const [searchData, setSearchData] = useState("");

  return (
    <div className={dataClass}>
      <section className="container-header">
        <div className="header-body">
          <h1 className="header-title">Code Nam</h1>
          <div className="container-switch">
            <div className="switch-icon">
              <i className="fas fa-sun"></i>
            </div>
            <div className="switch-group">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={toggleTheme}
                  checked={Theme === "dark"}
                ></input>
                <span className="slider round"></span>
              </label>
            </div>

            <div className="switch-icon">
              <i className="fas fa-moon"></i>
            </div>
          </div>
        </div>
      </section>
      <div className="container-search">
        <div className="search-box">
          <i className="search-icon fa fa-search"></i>
          <input
            className="search-input"
            type="text"
            onChange={(event) => {
              setSearchData(event.target.value);
            }}
            placeholder="How can we help?"
          ></input>
          <button className="search-button">Search</button>
        </div>
      </div>
      <section className="container-body">
        {
        record ? (
          <div className="container-content">
            {data
              .filter((data) => {
                let res = "";
                if (searchData === "") {
                  res = data;
                } else if (
                  data.title.toLowerCase().includes(searchData.toLowerCase())
                ) {
                  res = data;
                }

                return res;
              })
              .map((data, index) => {
                return (
                  <Card key={index} slug={`post/`+ data.slug} image={data.image} title={data.title} date={data.date} description={data.description} />
                );
              })}
          </div>
        ) : (
          <div className="no-content">
            <p>No post available</p>
          </div>
        )}
      </section>

      <div className="container-footer">
        <button onClick={facebook} className="button-more">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
