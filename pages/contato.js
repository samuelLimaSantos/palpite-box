import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

const Contato = () => {
  return (
    <div>
      <PageTitle title="Contato" />
      <h1>Contato</h1>
      <div>
        <Link href="/sobre">
          <a>Sobre</a>
        </Link>
        <Link href="/index">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Contato;
