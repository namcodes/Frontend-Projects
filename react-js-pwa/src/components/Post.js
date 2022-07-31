import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

function Post() {
  const { slug } = useParams();
  const [postData, setPostData] = useState([]);
  const [postCard, setPostLists] = useState([]);
  let Theme = localStorage.getItem("theme");
  const [isDark, setTheme] = useState(false);

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
      slug: slug,
    };

    const posts = {
      post: slug,
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
        .then((response) => {
          if (response.status === "success") {
            setPostData(response.data);
            document.title = "Code Nam | " + response.data.title;
          } else {
            console.error(response.message);
            window.location.href = "/";
          }
        });
    };

    reqData();

    const lists = async () => {
      await fetch("http://localhost/apis/", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(posts),
      })
        .then((res) => res.json())
        .then((response) => {
          setPostLists(response);
        });
    };

    lists();
  }, [slug]);

  const index = () => {
    window.location.href = "/";
  };

  return (
    <div className={dataClass}>
      <section className="container-header">
        <div className="header-body">
          <h1 onClick={index} className="header-title">
            Code Nam
          </h1>
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
      <section className="wrapper-post">
        <div className="container-post">
          <header>
            <img src={postData.image} alt="" />
          </header>
          <div className="container-post-body">
            <h1 className="title">{postData.title}</h1>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: postData.description }}
            />
          </div>
        </div>
        <section className="list-post">
          {postCard.map((data, index) => {
            return (
              <Card
                key={index}
                slug={data.slug}
                image={data.image}
                title={data.title}
                date={data.date}
                description={data.description}
              />
            );
          })}
        </section>
      </section>
    </div>
  );
}

export default Post;
