import React from 'react';
import { 
    SideNav,
    SideNavItem,
    Icon
 } from 'react-materialize';
 import { makeStyles } from '@material-ui/styles';
 import { Link } from 'react-router-dom';

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
    const Trigger = <span style={{cursor: 'pointer', width: '30px', marginLeft: '10px'}}><Icon className='deep-purple-text text-lighten-2' waves small>menu</Icon></span>

    return (
        <SideNav trigger={Trigger} fixed={true} className={`${classes.root} gradient_vicious_stance`}>
            <SideNavItem userView user={{
                background: userCover,
                image: userLogo,
                name: 'John Doe',
                email: 'john.doe@gmail.com'
            }} />

            <li> 
                <Link className='waves-effect' to='/dashboard'>
                    <Icon className='grey-text text-lighten-2'>home</Icon>
                    Home
                </Link>
            </li>

            <SideNavItem className='purple divider' divider></SideNavItem>

            <SideNavItem subheader>
               <span className='grey-text'>Finaceiro</span>
            </SideNavItem>

            <li> 
                <Link className='waves-effect' to='/dashboard/finance'>
                    <Icon className='purple-text text-lighten-2'>receipt</Icon>
                    Despesas e Receitas
                </Link>
            </li>

            <SideNavItem waves href="#!third">
                <Icon className='green-text text-accent-3'>bar_chart</Icon> Relatório Financeiro
            </SideNavItem>

            <li> 
                <Link className='waves-effect' to='/dashboard/category'>
                    <Icon className='indigo-text text-lighten-2'>category</Icon>
                    Categorias
                </Link>
            </li>

            <SideNavItem className='grey darken-2 divider' divider></SideNavItem>
            <SideNavItem waves href="#!settings">
                <Icon className='blue-text text-lighten-1'>settings</Icon> Configurações
            </SideNavItem>
            <SideNavItem waves href="#!logout">
                <Icon className='red-text text-lighten-1'>power_settings_new</Icon> Sair
            </SideNavItem>
        </SideNav>
    );
};

export default Sidebar;
