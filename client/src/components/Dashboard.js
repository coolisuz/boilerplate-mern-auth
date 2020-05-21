import React from 'react';
import requireAuth from './requireAuth';

class Dashboard extends React.Component {
    render() {
        return (
            <div>Dashboard</div>
        )
    }
}

export default requireAuth(Dashboard)