import React from "react";
import Navbar from "../components/Navbar"

const Default = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
        </>
        
    );
};

export default Default;