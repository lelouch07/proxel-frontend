import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ProjectDateRangePickerProps {
    startDate: Date | null; // Define startDate prop
    endDate: Date | null; // Define endDate prop
    onStartDateChange: (date: Date | null) => void; // Define onStartDateChange prop
    onEndDateChange: (date: Date | null) => void; // Define onEndDateChange prop
}

const ProjectDateRangePicker: React.FC<ProjectDateRangePickerProps> = ({
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
}) => {
    return (
        <div>
            <h2>Project Date Range</h2>
            <div>
                <label>Start Date:</label>
                <DatePicker selected={startDate} onChange={onStartDateChange} />
            </div>
            <div>
                <label>End Date:</label>
                <DatePicker selected={endDate} onChange={onEndDateChange} />
            </div>
        </div>
    );
};

export default ProjectDateRangePicker;
