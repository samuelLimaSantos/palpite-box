import React from "react";
import Link from "next/link";

const Contato = () => {
    return (
        <div>
            <h1>Contato</h1>
            <div>
                <Link href="/sobre">
                    <a>Sobre</a>
                </Link>
                <Link href= "/index">
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
};

export default Contato;