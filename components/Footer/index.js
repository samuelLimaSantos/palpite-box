import React from "react";

const Footer = () => {
    return (
        <div className = "bg-gray-700 p-4">
            <div className = "container mx-auto text-center font-bold text-white">
                Projeto desenvolvido por: Samuel Santos / {" "}
                <a className =  'hover:underline' href="https://www.linkedin.com/in/samuel-santos-036375174/" target = "_blank">Linkedin</a> / {" "}
                <a className =  'hover:underline' href="https://github.com/samuelLimaSantos" target = "_blank">Github</a> 
                <div className = "mt-2">
                    <img className = "inline p-4" src="/logo_semana_fsm.png" alt="Logo Semana Fullstack" />
                    <img className = "inline p-4" src="/logo_devPleno.png" alt="Logo DevPleno" />
                </div>

            </div>
        </div>
    )
};

export default Footer;