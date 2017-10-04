import React from 'react'
import {connect} from 'react-redux'
import { makeNotificationList } from 'app/components/elements/notification'

/*
import { Link } from 'react-router'
import Icon from 'app/components/elements/Icon';
import tt from 'counterpart';
*/

import NotificationLI from 'app/components/elements/notification'
import notificationList from 'app/components/elements/notification/_TestData'

class NotificationPage extends React.Component {
    static propTypes = {
        notifications: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    };

    closeMenu = (e) => {
        // If this was not a left click, or if CTRL or CMD were held, do not close the menu.
        if(e.button !== 0 || e.ctrlKey || e.metaKey) return;
        // Simulate clicking of document body which will close any open menus
        document.body.click();
    }

    render() {
        return ( <ul className="Notifications"> { makeNotificationList(this.props.notifications) } </ul> )
    }
}


export default connect(
    // mapStateToProps
    (state, ownProps) => {
        var yotifications = state.app.getIn(['yotifications']);
        const notifications = (yotifications && yotifications.size > 0)? yotifications.toJS() : []
        return {
            notifications,
            ...ownProps
        }
    }
)(NotificationPage)