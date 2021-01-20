import * as React from "react";
import Form from "../../components/forms";
import Logo from "../../config/logos/aresa.e3676c3d.png";

const PhenologicalEvents: React.FC = () => {
    return (
        <Form
            message="Formulario Eventos Fenologicos"
            logo={Logo}
            fields={[
                {
                    label: "Nombre Evento Fenologico",
                    name: "name",
                    placeholder: "Escribir Nombre",
                    type: "text",
                },
                {
                    label: "Abreviación del Evento",
                    name: "abbreviation",
                    placeholder: "Escribir una Abreviación",
                    type: "text",
                },
            ]}
        />
    );
};

export default PhenologicalEvents;