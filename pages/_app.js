import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthUserProvider } from "../utils/firebase-auth";
import "../styles/globals.css";
import "../styles/themes.css";
import { Nav } from "../components";

function App({ Component, pageProps }) {
    const router = useRouter();
    // const [authorized, setAuthorized] = useState(false);
    const [theme] = useState(() => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem("theme") == "default") {
                localStorage.setItem("theme", "theme-default");
            }
        }
    });

    return (
        <>
            <Head>
                <title>Rungeon</title>

                {/* TODO: Migrate these linked styles to actual modules */}
                {/* Bootstrap 5 */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous"
                ></link>
                <script
                    data-src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossOrigin="anonymous"
                ></script>

                {/* Font Awesome 6 */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
                    integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <script
                    data-src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"
                    integrity="sha512-8pHNiqTlsrRjVD4A/3va++W1sMbUHwWxxRPWNyVlql3T+Hgfd81Qc6FC5WMXDC+tSauxxzp1tgiAvSKFu1qIlA=="
                    crossOrigin="anonymous"
                ></script>
            </Head>

            <div id="app" className={theme}>
                <Nav />
                <div className="container pt-4 pb-4">
                    {
                        <AuthUserProvider>
                            <Component {...pageProps} />
                        </AuthUserProvider>
                    }
                </div>
            </div>
        </>
    );
}

export default App;
