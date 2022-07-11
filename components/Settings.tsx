import * as React from "react";
import { useState } from "react";
import { Spinner, Switch } from "ittai/components";
import * as settings from "ittai/settings"

export default function ExampleSettingsPage(): JSX.Element {
    const [switchValue, setSwitchValue] = useState(settings.get("funnySetting", false))
    return (<>
        {"Hello!"}
        <Spinner/>
        <Switch checked={switchValue} onChange={(val) => {
            settings.set("funnySetting", val);
            setSwitchValue(val);
            console.log("funnySetting is now", val);
        }}/>
    </>)
}