import React from 'react';
import { 
    SideNav,
    SideNavItem,
    Icon,
    Divider
 } from 'react-materialize';

 import userLogo from '../../../assets/images/user.jpg';

const Sidebar = () => {
    return (
        <SideNav options={{ draggable: false }} className='gradient_vicious_stance'>
            <SideNavItem userView user={{
                background: 'https://placeimg.com/640/480/tech?t=1561729189960',
                image: userLogo,
                name: 'John Doe'
            }} />

            <SideNavItem href="#!icon">
                <Icon className='pink-text text-darken-1'>home</Icon> <span className="white-text">Home</span>
            </SideNavItem>

            <SideNavItem divider></SideNavItem>

            <SideNavItem subheader>
               <span className='grey-text'>Finaceiro</span>
            </SideNavItem>
            <SideNavItem waves href="#!third">
                Third Link With Waves
            </SideNavItem>
        </SideNav>
    );
};

export default Sidebar;
