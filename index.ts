import { Plugin } from "ittai/entities";
import * as React from "react";
import ExampleSettingsPage from "./components/Settings";
import "./bruh.css";
export default class ExamplePlugin extends Plugin {
    start() {
        this.setSettingsPanel(() => React.createElement(ExampleSettingsPage));
        console.log("hello (after a hot reload)!");
        console.log(this);
    }

    stop() {
        console.log("bye");
    }
}