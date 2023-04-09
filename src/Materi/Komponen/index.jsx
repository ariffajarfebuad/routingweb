import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

export default class Komponen extends React.Component {

    render() {
        return (
            <div>
                <ClassComponent nama="Nurhadi Permana" />
                <FunctionalComponent nama={23}/>
            </div>
        )
    }
}