import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useAuthContext } from "../data/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../data/firebase";
import { Avatar } from "@mui/material";
import logo from "../assets/logo.png";
import "../style/Navbar.css";

function Navbar() {
  const [error, setError] = useState("");
  const [data, setData] = useState();
  const { user, logout } = useAuthContext();

  //getDoc fetches a single particular doc
  //getDocs fetches all docs in a particular collection
  const [profile, setProfile] = useState(false);

  function displayProfile() {
    setProfile(!profile);
  }

  useEffect(() => {
    getDoc(doc(db, "users", user.uid))
      .then((snap) => {
        setData(snap.data());
        // console.log(data.id)
      })
      .catch((e) => {
        console.log(e);
      });
  }, [user]);

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
    } catch (error) {
      console.log("Error logout" + error.message);
      setError("Failed to logout");
    }
  };

  //logout end

  //navbar active link
  //   var header = document.getElementById("navbar-nav");
  // var btns = header.getElementsByClassName("nav-item");
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function() {
  //   var current = document.getElementsByClassName("active");
  //   current[0].className = current[0].className.replace(" active", "");
  //   this.className += " active";
  //   });
  // }

  return (
    <div className="navbar">
      {/* {user && <div>{user.uid}</div>} */}

      <nav class="navbar navbar-expand-lg bg-var fixed-top ps-lg-5 pe-lg-5">
        <div class="container-fluid">
          <a
            class="navbar-brand text-start justify-content-start mt-2 m-1"
            href="#"
          >
            <img className="logo-nav" src={logo} alt="" />
            <svg
              width="158"
              height="21"
              viewBox="0 0 158 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.202 20.5773C8.7396 20.5773 7.38302 20.3175 6.13228 19.798C4.90078 19.2592 3.83283 18.5183 2.92845 17.5755C2.02407 16.6326 1.32173 15.5358 0.821428 14.2851C0.321131 13.0151 0.070982 11.6489 0.070982 10.1865C0.070982 8.33922 0.446205 6.67477 1.19665 5.19312C1.96634 3.71147 3.0439 2.53769 4.42934 1.67179C5.83403 0.805892 7.46961 0.372943 9.33611 0.372943C11.1256 0.372943 12.5977 0.603849 13.7522 1.06566C14.926 1.52747 15.7822 2.07588 16.321 2.71087C16.6866 3.17268 16.8983 3.78843 16.956 4.55812C17.0138 5.30857 17.0426 6.01091 17.0426 6.66515H16.2922C15.9266 4.93335 15.2435 3.66336 14.2429 2.85519C13.2615 2.02777 11.9146 1.61406 10.202 1.61406C9.02823 1.61406 8.02764 1.85459 7.20022 2.33565C6.37281 2.79746 5.68971 3.44208 5.15093 4.26949C4.63139 5.07766 4.24654 5.99167 3.99639 7.01151C3.74624 8.03134 3.62117 9.08966 3.62117 10.1865C3.62117 12.5148 3.91942 14.3524 4.51593 15.6994C5.11244 17.0463 5.91099 18.0084 6.91159 18.5857C7.91218 19.1437 9.00899 19.4227 10.202 19.4227C11.1449 19.4227 11.9338 19.3458 12.5688 19.1918C13.223 19.0379 13.8195 18.8262 14.3583 18.5568V13.4769C14.3583 13.0728 14.4064 12.6687 14.5026 12.2646C14.6181 11.8605 14.8586 11.4949 15.2242 11.1678C15.5898 10.8215 16.119 10.5425 16.8117 10.3308C17.5044 10.1191 18.4377 10.0133 19.6114 10.0133V10.6771C18.8418 10.6771 18.3126 10.9177 18.024 11.3987C17.7546 11.8798 17.6199 12.5533 17.6199 13.4192V18.7012C16.5423 19.3554 15.3974 19.8268 14.1851 20.1155C12.9921 20.4233 11.6644 20.5773 10.202 20.5773ZM43.1218 20.2886C42.4675 20.2886 41.8421 20.1539 41.2456 19.8845C40.6684 19.6152 40.0911 19.1822 39.5138 18.5857C38.9558 17.9699 38.3593 17.1425 37.7243 16.1035L34.838 11.2544H33.3371V20H30.0467V4.58699C30.0467 3.72109 29.9216 3.02837 29.6714 2.50883C29.4405 1.97005 28.8921 1.70066 28.0262 1.70066H27.5933V0.950208H35.3864C35.8867 0.950208 36.4639 0.988693 37.1182 1.06566C37.7917 1.12339 38.4651 1.25808 39.1386 1.46975C39.8121 1.66217 40.4375 1.9508 41.0147 2.33565C41.592 2.72049 42.0538 3.22079 42.4002 3.83654C42.7658 4.45229 42.9486 5.22198 42.9486 6.14561C42.9486 7.20393 42.7177 8.06021 42.2559 8.71444C41.794 9.36868 41.2072 9.8786 40.4952 10.2442C39.7832 10.5906 39.0424 10.8599 38.2727 11.0524L41.3034 16.1035C42.0346 17.335 42.6984 18.1624 43.2949 18.5857C43.9107 19.009 44.4879 19.2592 45.0267 19.3361V20C44.8728 20.077 44.613 20.1443 44.2474 20.202C43.8818 20.2598 43.5066 20.2886 43.1218 20.2886ZM33.3371 10.1576H35.2132C35.6558 10.1576 36.1176 10.0903 36.5986 9.95556C37.0797 9.80163 37.5319 9.57072 37.9552 9.26284C38.3785 8.95497 38.7153 8.54126 38.9654 8.02172C39.2348 7.50218 39.3695 6.86719 39.3695 6.11674C39.3695 5.3663 39.2348 4.7313 38.9654 4.21176C38.7153 3.69222 38.3785 3.27852 37.9552 2.97064C37.5511 2.64352 37.1086 2.41262 36.6275 2.27792C36.1464 2.12398 35.6846 2.04701 35.2421 2.04701C35.0304 2.04701 34.7514 2.06626 34.405 2.10474C34.0587 2.14323 33.7027 2.20095 33.3371 2.27792V10.1576ZM62.0166 20.2886C60.2271 20.2886 58.7647 19.9711 57.6294 19.3361C56.5134 18.7012 55.6956 17.7487 55.176 16.4787C54.6565 15.2087 54.3967 13.6212 54.3967 11.7162V4.58699C54.3967 3.74033 54.2813 3.05723 54.0503 2.53769C53.8387 2.01815 53.3288 1.73914 52.5206 1.70066H52.1454V0.950208H55.0606C55.734 0.950208 56.2536 1.05604 56.6192 1.2677C57.004 1.47937 57.2734 1.84497 57.4274 2.36451C57.5813 2.88405 57.6583 3.62488 57.6583 4.58699L57.6871 12.5821C57.7064 14.6026 58.0912 16.19 58.8417 17.3446C59.5921 18.4799 60.8044 19.0475 62.4784 19.0475C63.8639 19.0475 64.9703 18.7877 65.7977 18.2682C66.6444 17.7487 67.2601 16.9501 67.645 15.8725C68.0298 14.795 68.2222 13.4095 68.2222 11.7162V0.950208H69.55V11.7162C69.55 13.5635 69.319 15.1221 68.8572 16.3921C68.3954 17.6621 67.6161 18.6338 66.5193 19.3073C65.4417 19.9615 63.9408 20.2886 62.0166 20.2886ZM81.7131 20V4.58699C81.7131 3.72109 81.5881 3.02837 81.3379 2.50883C81.107 1.97005 80.5586 1.70066 79.6927 1.70066H79.2598V0.950208H82.377C83.0505 0.950208 83.57 1.05604 83.9356 1.2677C84.3205 1.47937 84.5898 1.84497 84.7438 2.36451C84.8977 2.88405 84.9747 3.62488 84.9747 4.58699V9.52261H93.1141V0.950208H96.4046V16.3632C96.4046 17.2291 96.52 17.9315 96.7509 18.4702C97.0011 18.9898 97.5591 19.2496 98.425 19.2496H98.8291V20H95.7118C95.0384 20 94.5092 19.9038 94.1244 19.7114C93.7588 19.4997 93.499 19.1341 93.3451 18.6146C93.1911 18.0758 93.1141 17.3253 93.1141 16.3632V10.7637H84.9747V20H81.7131ZM111.5 20C110.826 20 110.297 19.9038 109.912 19.7114C109.547 19.4997 109.287 19.1341 109.133 18.6146C108.979 18.0758 108.902 17.3253 108.902 16.3632V0.950208H112.192V16.3632C112.192 17.2291 112.308 17.9315 112.539 18.4702C112.789 18.9898 113.347 19.2496 114.213 19.2496H114.617V20H111.5ZM138.859 20.1732L126.563 5.3663V20H125.236V4.41381C125.236 3.62488 125.053 2.98026 124.687 2.47996C124.341 1.96042 123.658 1.70066 122.638 1.70066H122.436V0.950208H124.399C125.438 0.950208 126.275 1.10415 126.91 1.41202C127.564 1.70065 128.112 2.12398 128.555 2.68201L138.57 14.6314V0.950208H139.898V20.1732H138.859ZM154.372 20C153.698 20 153.169 19.9038 152.784 19.7114C152.419 19.4997 152.159 19.1341 152.005 18.6146C151.851 18.0758 151.774 17.3253 151.774 16.3632V0.950208H155.065V16.3632C155.065 17.2291 155.18 17.9315 155.411 18.4702C155.661 18.9898 156.219 19.2496 157.085 19.2496H157.489V20H154.372Z"
                fill="black"
              />
            </svg>
          </a>
          <button
            class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 7 80 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3125 15.9375H49.6875M10.3125 45.9375H49.6875H10.3125ZM10.3125 30.9375H49.6875H10.3125Z"
                  stroke="#FA9490"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto d-large" id="navbar-nav">
              <li class="nav-item text-center">
                <Link activeClassName="navbar__link--active" to={"/empower"}>
                  <svg
                    // width="29"
                    // height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.212 2C22.0868 2 21.0078 2.44697 20.2122 3.24257C19.4166 4.03817 18.9696 5.11724 18.9696 6.2424V23.212C18.9696 24.3371 19.4166 25.4162 20.2122 26.2118C21.0078 27.0074 22.0868 27.4544 23.212 27.4544C24.3371 27.4544 25.4162 27.0074 26.2118 26.2118C27.0074 25.4162 27.4544 24.3371 27.4544 23.212C27.4544 22.0868 27.0074 21.0078 26.2118 20.2122C25.4162 19.4166 24.3371 18.9696 23.212 18.9696H6.2424C5.11724 18.9696 4.03817 19.4166 3.24257 20.2122C2.44697 21.0078 2 22.0868 2 23.212C2 24.3371 2.44697 25.4162 3.24257 26.2118C4.03817 27.0074 5.11724 27.4544 6.2424 27.4544C7.36755 27.4544 8.44662 27.0074 9.24223 26.2118C10.0378 25.4162 10.4848 24.3371 10.4848 23.212V6.2424C10.4848 5.11724 10.0378 4.03817 9.24223 3.24257C8.44662 2.44697 7.36755 2 6.2424 2C5.11724 2 4.03817 2.44697 3.24257 3.24257C2.44697 4.03817 2 5.11724 2 6.2424C2 7.36755 2.44697 8.44662 3.24257 9.24223C4.03817 10.0378 5.11724 10.4848 6.2424 10.4848H23.212C24.3371 10.4848 25.4162 10.0378 26.2118 9.24223C27.0074 8.44662 27.4544 7.36755 27.4544 6.2424C27.4544 5.11724 27.0074 4.03817 26.2118 3.24257C25.4162 2.44697 24.3371 2 23.212 2Z"
                      stroke="#5E71A2"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <br />
                  Empower
                </Link>
              </li>
              <li class="nav-item text-center dropdown">
                <div className="dropbtn">
                  <Link to={"#"}>
                    <svg
                      // width="32"
                      // height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.4544 7.65625H4.82827C3.26626 7.65625 2 8.92251 2 10.4845V24.6258C2 26.1879 3.26626 27.4541 4.82827 27.4541H27.4544C29.0164 27.4541 30.2827 26.1879 30.2827 24.6258V10.4845C30.2827 8.92251 29.0164 7.65625 27.4544 7.65625Z"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.7975 27.4544V4.82827C21.7975 4.07816 21.4995 3.35878 20.9691 2.82838C20.4387 2.29798 19.7193 2 18.9692 2H13.3127C12.5626 2 11.8432 2.29798 11.3128 2.82838C10.7824 3.35878 10.4844 4.07816 10.4844 4.82827V27.4544"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <br />
                    Jobs &#x25BE;
                  </Link>
                  <div class="dropdown-content">
                    <Link to={"/findjob"}>Find Job</Link>
                    <hr />
                    <Link to={"/postjob"}>Post Job</Link>
                  </div>
                </div>
              </li>
              <li class="nav-item text-center dropdown">
                <div className="dropbtn">
                  <Link to={"#"}>
                    <svg
                      // width="30"
                      // height="29"
                      className="fill"
                      viewBox="0 0 30 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3367 28.9411C11.4784 28.9411 12.404 28.0155 12.404 26.8739C12.404 25.7322 11.4784 24.8066 10.3367 24.8066C9.19505 24.8066 8.26953 25.7322 8.26953 26.8739C8.26953 28.0155 9.19505 28.9411 10.3367 28.9411Z"
                        fill="black"
                      />
                      <path
                        d="M24.8055 28.9411C25.9472 28.9411 26.8727 28.0155 26.8727 26.8739C26.8727 25.7322 25.9472 24.8066 24.8055 24.8066C23.6638 24.8066 22.7383 25.7322 22.7383 26.8739C22.7383 28.0155 23.6638 28.9411 24.8055 28.9411Z"
                        fill="black"
                      />
                      <path
                        d="M28.941 5.16825H6.01559L5.16804 0.827096C5.11971 0.590115 4.98982 0.377583 4.80096 0.226496C4.6121 0.0754084 4.37624 -0.00466621 4.13443 0.000210276H0V2.06742H3.28687L7.23525 21.9127C7.28357 22.1497 7.41347 22.3622 7.60233 22.5133C7.79119 22.6644 8.02705 22.7444 8.26886 22.7396H26.8738V20.6724H9.11641L8.26886 16.5379H26.8738C27.1127 16.5438 27.3463 16.4666 27.5347 16.3196C27.7232 16.1726 27.8549 15.9649 27.9074 15.7317L29.9746 6.42925C30.0092 6.27589 30.0084 6.11664 29.9722 5.96364C29.9361 5.81064 29.8654 5.6679 29.7658 5.54631C29.6661 5.42471 29.54 5.32746 29.3971 5.26194C29.2542 5.19643 29.0982 5.16438 28.941 5.16825ZM26.0469 14.4707H7.87609L6.42904 7.23546H27.649L26.0469 14.4707Z"
                        fill="black"
                      />
                    </svg>
                    <br />
                    Services &#x25BE;
                  </Link>
                  <div class="dropdown-content">
                    <Link to={"/buyproduct"}>Hire Service</Link>
                    <hr />
                    <Link to={"/sellproduct"}>Post Service</Link>
                  </div>
                </div>
              </li>
              <li class="nav-item text-center dropdown">
                <Link to={"/queries"}>
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1413 30.2827C23.9514 30.2827 30.2827 23.9514 30.2827 16.1413C30.2827 8.33129 23.9514 2 16.1413 2C8.33129 2 2 8.33129 2 16.1413C2 23.9514 8.33129 30.2827 16.1413 30.2827Z"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0264 11.899C12.3588 10.9539 13.0151 10.157 13.8788 9.64935C14.7426 9.14171 15.7581 8.95615 16.7456 9.12553C17.733 9.2949 18.6287 9.80829 19.2739 10.5748C19.9191 11.3412 20.2723 12.3113 20.2708 13.3132C20.2708 16.1414 16.0284 17.5556 16.0284 17.5556"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.1406 23.2119H16.1567"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <br />
                  Queries
                </Link>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto d-small" id="navbar-nav">
              <li class="nav-item mt-2 mb-2 text-center">
                <Link activeClassName="navbar__link--active" to={"/empower"}>
                  Empower
                </Link>
              </li>
              <li class="nav-item mt-2 mb-2 text-center dropdown">
                <Link to={"/findjob"}>Find Job</Link>
              </li>
              <li class="nav-item mt-2 mb-2 text-center dropdown">
                <Link to={"/postjob"}>Post Job</Link>
              </li>
              <li class="nav-item mt-2 mb-2 text-center dropdown">
                <Link to={"/buyproduct"}>Hire Service</Link>{" "}
              </li>
              <li class="nav-item mt-2 mb-2 text-center dropdown">
                <Link to={"/sellproduct"}>Post Service</Link>
              </li>
              <li class="nav-item mt-2 mb-2 text-center dropdown">
                <Link to={"/queries"}>Queries</Link>
              </li>
            </ul>
          </div>
          <div class="nav-item ms-3">
            {data && (
              <div class="avatar">
                <div>
                  <Avatar sx={{ bgcolor: data.avatar }}>
                    <Button variant="normal" onClick={displayProfile}>
                      {data.name.charAt(0)}
                    </Button>
                  </Avatar>
                </div>
                {profile && (
                  <div className="profile">
                    <p>{data.email}</p>
                    <p>{data.name}</p>
                    <Button
                      className="logout ctc1-small"
                      onClick={handleLogout}
                    >
                      Log Out
                    </Button>
                  </div>
                )}
              </div>
            )}
            {error && <div>{error.message}</div>}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
