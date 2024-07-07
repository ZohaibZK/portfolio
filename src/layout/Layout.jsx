import React from "react";
import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;
