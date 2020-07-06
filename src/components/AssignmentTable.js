import React from 'react';
import AssignmentTableData from './AssignmentTableData';
import { Table, TableHeading } from '../styled/Table';

const AssignmentTable = (props) => {
    const { assignments } = props;
    return (
        <Table>
            <thead>
                <tr>
                    <TableHeading scope="col">Grade</TableHeading>
                    <TableHeading scope="col">Subject</TableHeading>
                    <TableHeading scope="col">Assignment</TableHeading>
                    <TableHeading scope="col">Last Update</TableHeading>
                    <TableHeading scope="col"></TableHeading>
                </tr>
            </thead>
            <tbody>
                {
                    assignments
                        .map((item) => (
                            <AssignmentTableData key={item.id} {...item} />
                        ))
                }
            </tbody>
        </Table>
    );
};

export default AssignmentTable;