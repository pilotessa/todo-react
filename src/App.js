import React, { Component } from 'react';
import { Button, Card, Divider, FontIcon, List, ListItem, TextField } from 'react-md';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="md-grid">
                <div className="app md-cell md-cell--6">
                    <Card>
                        <TextField
                            id="new"
                            block
                            paddedBlock
                            customSize="title"
                            placeholder="What needs to be done?"
                        />
                        <Divider />
                        <List>
                            <ListItem className="task" leftIcon={<FontIcon>check_box_outline_blank</FontIcon>} primaryText="Test task 1" active={true}>
                                <Button icon secondary>close</Button>
                            </ ListItem>
                            <ListItem className="task" leftIcon={<FontIcon>check_box_outline_blank</FontIcon>} primaryText="Test task 2" active={true}>
                                <Button icon secondary>close</Button>
                            </ ListItem>
                            <ListItem className="task" leftIcon={<FontIcon>check_box</FontIcon>} primaryText="Test task 3">
                                <Button icon secondary>close</Button>
                            </ ListItem>
                            <Divider />
                            <ListItem
                                primaryText="3 item(s) left"
                            >
                            <MenuButton
                                  id="taskActions"
                                  icon
                                  buttonChildren="more_horiz"
                                  tooltipLabel="Actions"
                            >
                                <ListItem leftIcon={<FontIcon>radio_button_checked</FontIcon>} primaryText="All" active={true} />
                                <ListItem leftIcon={<FontIcon>radio_button_unchecked</FontIcon>} primaryText="Active" />
                                <ListItem leftIcon={<FontIcon>radio_button_unchecked</FontIcon>} primaryText="Completed" />
                                <Divider />
                                <ListItem leftIcon={<FontIcon>close</FontIcon>} primaryText="Clear completed" />
                            </MenuButton>
                            </ListItem>
                        </List>
                    </Card>
                </div>
            </div>
        );
    }
}

export default App;
