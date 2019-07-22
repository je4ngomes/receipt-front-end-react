import React, { cloneElement } from 'react';
import { Row } from 'react-materialize';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    rowRoot: {
        marginBottom: 5,
        '& button': {
            marginRight: 5, 
            marginTop: 5
        }
    }
});

const ActionsPanel = ({ actions = [] }) => {
    const classes = useStyles();

    return (
        <Row className={classes.rowRoot}>
            {actions.map((btnElem, i) => cloneElement(btnElem, { key: i }))}
        </Row>
    );
};

export default ActionsPanel;
