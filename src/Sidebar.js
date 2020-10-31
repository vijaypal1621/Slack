import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Software Developer</h2>
                    <h3>
                    <FiberManualRecordIcon />
                    Vijay PAL
                    </h3>
                </div>
                <CreateIcon/>
                <SidebarOption Icon={InsertCommentIcon} title="Threads" />
                

            </div>
        </div>
    )
}

export default Sidebar;
