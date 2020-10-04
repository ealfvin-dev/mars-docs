import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
        },
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'rgba(39.525, 55.335, 74.46, 1)'
    }
}));

function SideNav(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState("");

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavClick = (e) => {
        setActiveTab(e.target.text);
    }

    const isSubMenu = (text) => {
        if(text === 'Creating Input Files' || text === 'Saving Data in Database' || text === 'Debugging') {
            return true;
        }
        return false;
    }

    const drawer = (
        <div>
            <List>
                {['Home', 'Features', 'Documentation', 'Creating Input Files', 'Saving Data in Database', 'Debugging', 'Validation Details', 'About']
                .map((text, index) => (
                    <ListItem
                    key={index}
                    style={{
                        paddingTop: isSubMenu(text) ? '2px' : '7px',
                        paddingBottom: (isSubMenu(text) || text === 'Documentation') && text !== 'Debugging' ? '2px' : '7px',
                        marginLeft: isSubMenu(text) ? '17px': '0px'
                    }}
                    >
                        <Link 
                        to={text !== "Documentation" ? "/" + text.replace(/\s+/g, '').toLowerCase() : "#"}
                        onClick={handleNavClick}
                        style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontSize: isSubMenu(text) ? '11pt' : '12pt',
                            margin: '4px',
                            fontWeight: text === activeTab ? 'bold' : 'normal'
                        }}
                        >
                            {text}
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Example Files'].map((text, index) => (
                <ListItem key={index}>
                    <Link 
                    to={"/examplefiles"}
                    onClick={handleNavClick}
                    style={{
                        textDecoration: 'none',
                        color: 'white',
                        fontSize: '12pt',
                        margin: '4px',
                        fontWeight: text === activeTab ? 'bold' : 'normal'
                    }}
                    >
                        {text}
                    </Link>
                </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <CssBaseline />
            <nav className={classes.drawer} aria-label="folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

export default SideNav;
