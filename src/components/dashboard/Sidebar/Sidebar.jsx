import React from 'react';
import { 
    SideNav,
    SideNavItem,
    Icon
 } from 'react-materialize';
 import { makeStyles } from '@material-ui/styles';

 import userLogo from '../../../assets/images/user.jpg';
 import userCover from '../../../assets/images/userCover.jpg';

const useStyles = makeStyles({
    root: {
        '& a': {
            color: '#fff !important'
        },
        '& i': {
            margin: '0 20px 0 0 !important'
        }
    }
});

const Sidebar = () => {
    const classes = useStyles();
    const Trigger = <span style={{cursor: 'pointer', width: '30px'}}><Icon className='pink-text' waves small>menu</Icon></span>

    return (
        <SideNav trigger={Trigger} fixed={true} className={`${classes.root} gradient_vicious_stance`}>
            <SideNavItem userView user={{
                background: userCover,
                image: userLogo,
                name: 'John Doe',
                email: 'john.doe@gmail.com'
            }} />

            <SideNavItem waves>
                <Icon className='grey-text text-lighten-2'>home</Icon> Home
            </SideNavItem>

            <SideNavItem className='pink divider' divider></SideNavItem>

            <SideNavItem subheader>
               <span className='grey-text'>Finaceiro</span>
            </SideNavItem>
            <SideNavItem waves href="#!third">
                <Icon className='purple-text text-lighten-2'>receipt</Icon> Despesas e Receitas
            </SideNavItem>
            <SideNavItem waves href="#!third">
                <Icon className='green-text text-accent-3'>bar_chart</Icon> Relatório
            </SideNavItem>

            <SideNavItem className='grey darken-2 divider' divider></SideNavItem>
            <SideNavItem waves href="#!settings">
                <Icon className='blue-text text-lighten-1'>settings</Icon> Configurações
            </SideNavItem>
            <SideNavItem waves href="#!logout">
                <Icon className='red-text text-lighten-1'>exit_to_app</Icon> Sair
            </SideNavItem>
        </SideNav>
    );
};

export default Sidebar;
