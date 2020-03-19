import React, { Component } from 'react'
import { dummyData } from '../../dummyData'

export default class UserComplaintsAndReports extends Component {
    
    renderUserReports(){
        const { userReports } = dummyData;

        const userTable = userReports.map(report => {
            return (
                <tr 
                     key={report.id}
                      >
                    <th>{report.id}</th>
                    <th className="admin-paragraph">{report.message}</th>
                    <th>{report.message_type}</th>
                    <th>{report.user_id}</th>
                    <th>{report.date_sent}</th>
                </tr>
            )
        })

        return userTable;
    }
    
    render() {
        return (
            <div className="users-info reports">
                <h2>User Complaints and reports</h2>
                <table className="admin-table reports">
                    <thead>
                        <tr className="about-reports">
                            <th>Username</th>
                            <th>Message</th>
                            <th>Type</th>
                            <th>User ID</th>
                            <th>Date Sent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUserReports()}
                    </tbody>
                </table>
            </div>
        )
    }
}
