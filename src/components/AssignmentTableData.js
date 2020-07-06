import React from 'react';
import { getMoment } from '../helper/getMoment';
import { TableData } from '../styled/Table';
import { StyleLink, DefaultLink } from '../styled/Button';

const AssignmentTableData = (props) => {
    const { gradeNum, subjectNam, assignment, url } = props;
    return (
        <tr>
            <TableData>Grade-{gradeNum}</TableData>
            <TableData>{subjectNam}</TableData>
            <TableData>
                <DefaultLink href={url}>{assignment}</DefaultLink>
            </TableData>
            <TableData>{getMoment(new Date())}</TableData>
            <TableData>
                <StyleLink target="_blank" href={url}>View Assignment</StyleLink>
            </TableData>
        </tr>
    );
};

export default AssignmentTableData;