import "./CoderHub.css";
import logo from "./logo.jpeg";
function CoderHub() {
  //show more and show less button for course
  const myfunc = () => {
    var myDiv = document.getElementById("myDiv");
    if (myDiv.style.display === "none") {
      myDiv.style.display = "flex";
      document.getElementById("myButton").innerText = "Show less";
    } else {
      document.getElementById("myButton").innerText = "Show more";
      myDiv.style.display = "none";
    }
  };
  //show more and show less button for db
  const myfunc2 = () => {
    var myDiv = document.getElementById("myDiv2");
    if (myDiv.style.display === "none") {
      document.getElementById("myButton2").innerText = "Show less";
      myDiv.style.display = "flex";
    } else {
      document.getElementById("myButton2").innerText = "Show more";
      myDiv.style.display = "none";
    }
  };
  //change between home and about
  function showabout() {
    var abt = document.getElementById("abt");
    var srch = document.getElementById("srch");
    var abb = document.getElementById("abb");
    var hmm = document.getElementById("hmm");
    abt.style.display = "block";
    srch.style.display = "none";
    abb.style.backgroundColor = "grey";
    if (document.body.style.backgroundColor === "black") {
      hmm.style.backgroundColor = "black";
    } else {
      hmm.style.backgroundColor = "rgb(25, 50, 191)";
    }
  }
  function showsrch() {
    var abt = document.getElementById("abt");
    var srch = document.getElementById("srch");
    var abb = document.getElementById("abb");
    var hmm = document.getElementById("hmm");
    abt.style.display = "none";
    srch.style.display = "flex";
    hmm.style.backgroundColor = "grey";
    if (document.body.style.backgroundColor === "black") {
      abb.style.backgroundColor = "black";
    } else {
      abb.style.backgroundColor = "rgb(25, 50, 191)";
    }
  }
  //Button to change between dark and light mode
  const darkfunc = () => {
    var contain = document.getElementsByClassName("container");
    var contain3 = document.getElementsByClassName("container3");
    var childdivs = document.getElementsByClassName("child");
    var dbase = document.getElementsByClassName("database");
    var hide = document.getElementsByClassName("hidden");
    var tp = document.getElementsByClassName("top");
    var tptxt = document.getElementsByClassName("toptext");
    var tpbut = document.getElementsByClassName("topbut");
    var b1 = document.getElementById("brk1");
    var br2 = document.getElementById("brk2");
    var b3 = document.getElementById("brk3");
    var sbut = document.getElementById("searchButton");
    var br = document.getElementById("barss");
    var nv = document.getElementById("navv");
    var hd = document.getElementById("headdd");
    var abb = document.getElementById("abb");
    var hmm = document.getElementById("hmm");
    var i, j, k, l;

    if (document.body.style.backgroundColor === "white") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.getElementById("barss").innerText = "Light";
      b1.style.backgroundColor = "rgb(110, 106, 106)";
      b3.style.backgroundColor = "rgb(110, 106, 106)";
      br2.style.backgroundColor = "rgb(148, 75, 75)";
      sbut.style.backgroundColor = "rgb(148, 75, 75)";
      br.style.backgroundColor = "white";
      br.style.color = "black";
      nv.style.backgroundColor = "black";
      hd.style.backgroundColor = "black";
      if (document.body.style.backgroundColor === "black") {
        abb.style.backgroundColor = "black";
      } else {
        abb.style.backgroundColor = "rgb(25, 50, 191)";
      }
      if (document.body.style.backgroundColor === "black") {
        hmm.style.backgroundColor = "black";
      } else {
        hmm.style.backgroundColor = "rgb(25, 50, 191)";
      }
      for (j of childdivs) {
        j.style.backgroundColor = "black";
      }
      for (l of tp) {
        l.style.backgroundColor = "rgb(110, 106, 106)";
      }
      for (l of tptxt) {
        l.style.backgroundColor = "rgb(110, 106, 106)";
      }
      for (l of tpbut) {
        l.style.backgroundColor = "rgb(110, 106, 106)";
      }
      for (l of hide) {
        l.style.backgroundColor = "rgb(110, 106, 106)";
      }
      for (i of contain3) {
        i.style.backgroundImage =
          "linear-gradient(rgba(0, 0, 0, 0.632),rgba(128, 128, 128, 0.96))";
      }
      for (l of dbase) {
        l.style.backgroundColor = "rgb(148, 75, 75)";
      }
      var z = 0;
      for (k of contain) {
        if (z != 2) {
          k.style.backgroundColor = "rgb(110, 106, 106)";
        }
        z++;
      }
    } else {
      document.body.style.backgroundColor = "white";
      document.getElementById("barss").innerText = "Dark";
      document.body.style.color = "black";
      b1.style.backgroundColor = "#ebefff";
      b3.style.backgroundColor = "#ebefff";
      br2.style.backgroundColor = "white";
      sbut.style.backgroundColor = "#6891bd";
      br.style.color = "white";
      br.style.backgroundColor = "black";
      nv.style.backgroundColor = "rgb(25, 50, 191)";
      hd.style.backgroundColorr = "rgb(25, 50, 191)";
      if (document.body.style.backgroundColor === "black") {
        hmm.style.backgroundColor = "black";
      } else {
        hmm.style.backgroundColor = "rgb(25, 50, 191)";
      }
      if (document.body.style.backgroundColor === "black") {
        abb.style.backgroundColor = "black";
      } else {
        abb.style.backgroundColor = "rgb(25, 50, 191)";
      }
      for (j of childdivs) {
        j.style.backgroundColor = "white";
      }
      for (l of tp) {
        l.style.backgroundColor = "#ebefff";
      }
      for (l of tptxt) {
        l.style.backgroundColor = "#ebefff";
      }
      for (l of tpbut) {
        l.style.backgroundColor = "#ebefff";
      }
      for (l of hide) {
        l.style.backgroundColor = "#ebefff";
      }
      for (i of contain3) {
        i.style.backgroundImage =
          "linear-gradient(rgba(255,255,255),rgba(255,255,255))";
      }
      for (l of dbase) {
        l.style.backgroundColor = "white";
      }
      z = 0;
      for (k of contain) {
        if (z != 2) {
          k.style.backgroundColor = "#ebefff";
        }
        z++;
      }
    }
  };
  return (
    <div id="body">
      <div id="log">
        <img src={logo} alt="" id="logo" />
      </div>
      <div id="headdd">
        <div>
          <nav id="navv">
            <ul>
              <li id="hmm">
                <a href="#home" onClick={() => showsrch()}>
                  Home
                </a>
              </li>
              <li id="abb">
                <a href="#about" onClick={() => showabout()}>
                  About
                </a>
              </li>
              <li>
                <a href="#course">Programming</a>
              </li>
              <li>
                <a href="#dbms">Data Bases</a>
              </li>
              <li>
                <a href="#subs">Subjects</a>
              </li>
            </ul>
            <button id="barss" className="dark" onClick={() => darkfunc()}>
              Dark
            </button>
          </nav>
        </div>
      </div>
      <br />
      <div className="container3" id="srch">
        <div className="search-container">
          <input
            type="text"
            id="searchInput"
            className="search-bar"
            placeholder="Search..."
          />
          <button id="searchButton" className="search-button">
            Search
          </button>
        </div>
        <div className="details">
          <ul style={{ listStyleType: "disc" }}>
            <li>Offering 380+ Video Lectures</li>
            <li>Watched over 130,000+ Hours</li>
            <li>With over 2300000+ Views</li>
            <li>Supported with hundreds of Code Samples & Exercises</li>
          </ul>
        </div>
      </div>
      <div className="about" id="abt">
        <h2 style={{ textDecoration: "underline" }}>Welcome to CoderHub</h2>
        <p>
          CoderHub offers you indepth knowledge on several programming
          languages, databases and also subject matter expertise on domains like
          Cyber Security, Database Management Systems and Software Engineering.
        </p>
        <br />
        <p>
          The video lectures and tutorials have been designed in such a way that
          even a beginner can follow the concepts with minimum effort.
        </p>
        <br />
        <p>
          At CoderHub the focus is on providing numerous exercises so that the
          users can get hands on experience on the concept.{" "}
          <span>
            These lectures have already been utilized by learners worldwide for
            more than 100,000+ Hours with over 2 Million views
          </span>
          .
        </p>
        <br />
        <p>
          CoderHub will be continously evolving and effort will be made to add
          more subjects in newer domains and also offer users with a valuable
          and enriching experience. Register with us to get notifications and
          also follow us on our social media accounts to get news on our updates
          to the platform. CoderHub team wishes you success in your learning
          journey.
        </p>
      </div>

      <div className="top" id="course">
        <div className="toptext">
          <h1>Courses</h1>
        </div>
        <div className="topbut">
          <button className="but" id="myButton" onClick={() => myfunc()}>
            Show more
          </button>
        </div>
      </div>

      <div className="container">
        <div className="child" id="div1" onClick={() => window.open("https://www.geeksforgeeks.org/html-tutorial/")} >
          <div className="picture" id="img1">
            &nbsp;
          </div>
          <div className="links">
            <h2>HTML</h2>
          </div>
        </div>
        <div className="child" id="div2" onClick={() => window.open("https://www.w3schools.com/css/")}>
          <div className="picture" id="img2">
            &nbsp;
          </div>
          <div className="links">
            <h2>CSS</h2>
          </div>
        </div>
        <div className="child" id="div3" onClick={() => window.open("https://www.javatpoint.com/javascript-tutorial")}>
          <div className="picture" id="img3">
            &nbsp;
          </div>
          <div className="links">
            <h2>Java-script</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="child" id="div4" >
          <div className="picture" id="img4">
            &nbsp;
          </div>
          <div className="links">
            <h2>JAVA</h2>
          </div>
        </div>
        <div className="child" id="div5" >
          <div className="picture" id="img5">
            &nbsp;
          </div>
          <div className="links">
            <h2>NodeJS</h2>
          </div>
        </div>
        <div className="child" id="div6" >
          <div className="picture" id="img6">
            &nbsp;
          </div>
          <div className="links">
            <h2>JQuery</h2>
          </div>
        </div>
      </div>

      <div className="container2 hidden" id="myDiv">
        <div className="child" id="div7" >
          <div className="picture" id="img7">
            &nbsp;
          </div>
          <div className="links">
            <h2>Python</h2>
          </div>
        </div>
        <div className="child" id="div8" >
          <div className="picture" id="img8">
            &nbsp;
          </div>
          <div className="links">
            <h2>PHP</h2>
          </div>
        </div>
        <div className="child" id="div9" >
          <div className="picture" id="img9">
            &nbsp;
          </div>
          <div className="links">
            <h2>C-Programming</h2>
          </div>
        </div>
      </div>
      <div className="break" id="brk1"></div>
      <div className="top database" id="dbms">
        <div className="toptext database">
          <h1>Databases</h1>
        </div>
        <div className="topbut database">
          <button className="but" id="myButton2" onClick={() => myfunc2()}>
            Show more
          </button>
        </div>
      </div>
      <div className="container database">
        <div className="child" id="dbdiv1" >
          <div className="picture" id="img10">
            &nbsp;
          </div>
          <div className="links">
            <h2>MySQL(SQL)</h2>
          </div>
        </div>
        <div className="child" id="dbdiv2" >
          <div className="picture" id="img11">
            &nbsp;
          </div>
          <div className="links">
            <h2>Oracle(SQL)</h2>
          </div>
        </div>
        <div className="child" id="dbdiv3" >
          <div className="picture" id="img12">
            &nbsp;
          </div>
          <div className="links">
            <h2>MongoDB</h2>
          </div>
        </div>
      </div>
      <div className="container2 hidden database" id="myDiv2">
        <div className="child" id="dbdiv4" >
          <div className="picture" id="img13">
            &nbsp;
          </div>
          <div className="links">
            <h2>Neo4j</h2>
          </div>
        </div>
        <div className="child" id="dbdiv5" >
          <div className="picture" id="img14">
            &nbsp;
          </div>
          <div className="links">
            <h2>Redis</h2>
          </div>
        </div>
        <div className="child" id="dbdiv6" >
          <div className="picture" id="img15">
            &nbsp;
          </div>
          <div className="links">
            <h2>Cassandra</h2>
          </div>
        </div>
      </div>
      <div className="break1" id="brk2"></div>

      <div className="top" id="subs">
        <div className="toptext">
          <h1>Subjects</h1>
        </div>
        <div className="topbut">
          <button className="but" id="myButton3">
            Show more
          </button>
        </div>
      </div>
      <div className="container">
        <div className="child" id="div16" >
          <div className="picture" id="img16">
            &nbsp;
          </div>
          <div className="links">
            <h2>Cyber Security</h2>
          </div>
        </div>
        <div className="child" id="div17" >
          <div className="picture" id="img17">
            &nbsp;
          </div>
          <div className="links">
            <h2>Ethical Hacking</h2>
          </div>
        </div>
        <div className="child" id="div18" >
          <div className="picture" id="img18">
            &nbsp;
          </div>
          <div className="links">
            <h2>Database Management Systems</h2>
          </div>
        </div>
      </div>
      <div className="break2" id="brk3"></div>
    </div>
  );
}

export default CoderHub;
