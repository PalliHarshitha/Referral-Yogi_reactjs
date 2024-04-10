import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PieCharts from './pieChart';
import BarGraph from './barChart';
import LineGraph from './lineChart';
import style from './style.module.css'

function TopBar() {
    const [selectedChart, setSelectedChart] = useState(null);

    const handleChartSelection = (chartComponent) => {
        setSelectedChart(chartComponent);
    }

    let chartToRender;
    if (selectedChart === 'Pie Chart') {
        chartToRender = <PieCharts />;
    } else if (selectedChart === 'Bar Graph') {
        chartToRender = <BarGraph />;
    } else if (selectedChart === 'Line Graph') {
        chartToRender = <LineGraph />;
    }

    return (
        <div className={style.topbar}>
            
            <DropdownButton id="dropdown-basic-button" title={`${selectedChart || 'None'}`}>
                <Dropdown.Item onClick={() => handleChartSelection('Pie Chart')}>Pie Chart</Dropdown.Item>
                <Dropdown.Item onClick={() => handleChartSelection('Bar Graph')}>Bar Graph</Dropdown.Item>
                <Dropdown.Item onClick={() => handleChartSelection('Line Graph')}>Line Graph</Dropdown.Item>
            </DropdownButton>
            {chartToRender}
        </div>
    );
}

export default TopBar;
