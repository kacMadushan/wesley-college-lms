import React from 'react';
import RowWithCol from './RowWithCol';
import SelectField from './SelectField';
import { StyleButton } from '../styled/Button';

const FilterOptions = (props) => {
    const {
        grades,
        subjects,
        selectGrade,
        selectSubject,
        handleOnChangeGrade,
        handleOnChangeSubject,
        handleOnClickAssignment
    } = props;
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <SelectField
                        options={grades}
                        optionName="gradeName"
                        optionKey="id"
                        optionValue="gradeId"
                        defaultValue="Select Grade"
                        value={selectGrade}
                        onChange={handleOnChangeGrade}
                    />
                </div>
                <div className="col-md-6">
                    <SelectField
                        options={subjects}
                        optionName="name"
                        optionKey="id"
                        optionValue="name"
                        defaultValue="Select Subject"
                        value={selectSubject}
                        onChange={handleOnChangeSubject}
                    />
                </div>
            </div>
            <RowWithCol col="col-md-4 offset-md-4">
                <StyleButton
                    onClick={handleOnClickAssignment}
                >
                    Get Assignment
                </StyleButton>
            </RowWithCol>
        </div>
    )
};

export default FilterOptions;