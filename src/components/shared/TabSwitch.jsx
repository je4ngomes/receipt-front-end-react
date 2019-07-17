import React, { Children } from 'react';
import { Tabs, Tab } from 'react-materialize';


const TabSwitch = ({ children, tabsTitle=[] }) => {
    return (
        <Tabs className="z-depth-1 tabs-fixed-width transparent">
            {Children.map(
                children, 
                (child, i) => (<Tab title={tabsTitle[i]}>{child}</Tab>)
            )}
        </Tabs>
    );
};

export default TabSwitch;
