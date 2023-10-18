import React from "react";
import "../styles/placement-essentials.scss";
import BusinessIcon from '@mui/icons-material/Business';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const PlacementEssentials = () => {
    return <div className="placement-essentials fr-aic jc-sb">
        <div className="left fc g-10">
            <span className="section-title gradient-text">Placement Essentials</span>
            <span className="section-sub-title">All Inclusive Placement Essentials at Your Fingertips</span>
        </div>
        <div className="right">
        <div className="dummy-card"></div>
            <div className="card card1">
                <Diversity3Icon className="icon"/>
                <span className="text">Mock Interviews</span>
            </div>
            <div className="card card2">
                <AssignmentIcon className="icon"/>
                <span className="text">Resume Making</span>
            </div>
            <div className="card card3">
                <BusinessIcon className="icon"/>
                <span className="text">Building Live Projects</span>
            </div>
            <div className="card card4">
                <AutoGraphIcon className="icon" />
                <span className="text">Data Structures & Algorithms</span>
            </div>
        </div>
    </div>;
}