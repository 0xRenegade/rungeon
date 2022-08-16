import { useState, useEffect } from "react";
import { NavLink } from "../components";

export default Home;

function Home() {
    const [users, setUsers] = useState(null);
    const [showMe, setShowMe] = useState(false);

    useEffect(() => {}, []);

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
        <div>
            <div
                id="themePopup"
                style={{
                    display: showMe ? "block" : "none",
                }}
            >
                <div
                    className="title theme-serika"
                    onClick={setTheme("theme-serika")}
                    id="serika"
                >
                    serika
                </div>
                <div
                    className="title theme-cobalt"
                    onClick={setTheme("theme-cobalt")}
                    id="cobalt"
                >
                    cobalt
                </div>
                <div
                    className="title theme-hedge"
                    onClick={setTheme("theme-hedge")}
                    id="hedge"
                >
                    hedge
                </div>
                <div
                    className="title theme-passionfruit"
                    onClick={setTheme("theme-passionfruit")}
                    id="passionfruit"
                >
                    passionfruit
                </div>
                <div
                    className="title theme-rgb"
                    onClick={setTheme("theme-rgb")}
                    id="rgb"
                >
                    rgb
                </div>
                <div
                    className="title theme-dots"
                    onClick={setTheme("theme-dots")}
                    id="dots"
                >
                    dots
                </div>
                <div
                    className="title theme-default"
                    onClick={setTheme("theme-default")}
                    id="default"
                >
                    default
                </div>
            </div>
            <div className="doors">
                <NavLink href="/rungeon">
                    <i
                        id="doors_icon"
                        className="icon fas fa-dungeon fa-5x"
                    ></i>
                </NavLink>
            </div>
            <div className="links">
                <NavLink
                    href="https://github.com/devkennyy/rungeon"
                    className="textButton"
                    target="_blank"
                >
                    <i className="fas fa-fw fa-code"></i>
                    <div className="text">GitHub</div>
                </NavLink>
                <div className="textButton" onClick={toggle}>
                    <i className="fas fa-fw fa-palette"></i>
                    <div className="text">Theme</div>
                </div>
                <NavLink
                    href="https://discord.gg/SFX2KSuzep"
                    className="textButton"
                    target="_blank"
                >
                    <i className="fa-brands fa-fw fa-discord"></i>
                    <div className="text">Discord</div>
                </NavLink>
            </div>
        </div>
    );
}
