import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { useRouter } from "next/router";
import { useAuth } from "../utils/firebase-auth";

export { Nav };

// Todo: add sign out button, account/dashboard page links

function Nav() {
    const [showMe, setShowMe] = useState(false);
    const { authUser, loading, signOut } = useAuth();
    const router = useRouter();

    useEffect(() => {}, []);

    if (router.pathname !== "/rungeon") return null;

    if (authUser) {
        console.log(authUser);
    }

    const toggle = () => {
        if (!showMe) {
            setShowMe(true);
        } else {
            setShowMe(false);
        }
    };

    const setTheme = (theme) => {
        return () => {
            if (typeof window !== "undefined") {
                document
                    .getElementById("app")
                    .classList.remove(localStorage.getItem("theme"));
                localStorage.setItem("theme", theme);
                document.getElementById("app").classList.add(theme);
                toggle();
            }
        };
    };

    return (
        <nav className="navbar navbar-expand-lg" id="navbar">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav">
                        <NavLink href="/" exact className="nav-item nav-link">
                            <i className="fas fa-fw fa-home"></i>
                        </NavLink>
                        <NavLink
                            href="https://github.com/devkennyy/rungeon"
                            className="nav-item nav-link"
                            exact
                        >
                            <i className="fas fa-fw fa-code"></i>
                        </NavLink>
                        <NavLink
                            className="nav-item nav-link"
                            href="https://discord.com/invite/SFX2KSuzep"
                        >
                            <i className="fa-brands fa-fw fa-discord"></i>
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            // onClick={progressVisabilityToggle()}
                            href="#"
                        >
                            <i
                                id="visabilityIcon"
                                className="fa-solid fa-eye"
                            ></i>
                        </NavLink>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={toggle}
                            >
                                <i className="fas fa-fw fa-palette"></i>
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                                style={{
                                    display: showMe ? "block" : "none",
                                }}
                            >
                                <li>
                                    <a
                                        className="dropdown-item"
                                        id="serika"
                                        onClick={setTheme("theme-serika")}
                                        href="#"
                                    >
                                        serika
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        id="cobalt"
                                        onClick={setTheme("theme-cobalt")}
                                        href="#"
                                    >
                                        cobalt
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        id="hedge"
                                        onClick={setTheme("theme-hedge")}
                                        href="#"
                                    >
                                        hedge
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        id="passionfruit"
                                        onClick={setTheme("theme-passionfruit")}
                                        href="#"
                                    >
                                        passionfruit
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        id="rgb"
                                        onClick={setTheme("theme-rgb")}
                                        href="#"
                                    >
                                        rgb
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        id="dots"
                                        onClick={setTheme("theme-dots")}
                                        href="#"
                                    >
                                        dots
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        id="default"
                                        onClick={setTheme("theme-default")}
                                        href="#"
                                    >
                                        default
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {typeof authUser === "null" && (
                            <NavLink
                                className="nav-link nav-item"
                                href="/login"
                            >
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                            </NavLink>
                        )}
                        {/* {typeof authUser === "object" && (
                            <button
                                onClick={signOut}
                                className="btn btn-primary"
                            >
                                Logout
                            </button>
                        )} */}
                        {/* Todo: Fix the signing out when using Nav component. Dashboard button works */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
