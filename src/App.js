import React, { Component, Fragment } from 'react';
import assignmentSelector from './selectors/assignments';
import RowWithCol from './components/RowWithCol';
import Header from './components/Header';
import FilterOptions from './components/FilterOptions';
import Info from './components/Info';
import AssignmentTable from './components/AssignmentTable';
import { Panel, HeroSection } from './styled/App';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            grades: [],
            subjects: [],
            assignments: [],
            selectGrade: '',
            selectSubject: ''
        }
    }

    handleOnChangeGrade = e => {
        const selectGrade = e.target.value;
        this.setState({ selectGrade })
    }

    handleOnChangeSubject = e => {
        const selectSubject = e.target.value.trim();
        this.setState({ selectSubject })
    }

    handleOnClickAssignment = () => {
        this.getAllAssignments();
    }

    getAllAssignments = () => {
        const baseUrl = './assignments.json';
        fetch(baseUrl)
            .then(response => response.json())
            .then(assignments => this.setState({ assignments }))
    }

    getAllGrades = () => {
        const baseUrl = './grades.json';
        fetch(baseUrl)
            .then(response => response.json())
            .then(grades => this.setState({ grades }))
    }

    getSubjectsSixToNine = () => {
        const baseUrl = './subjects6to9.json';
        fetch(baseUrl)
            .then(response => response.json())
            .then(subjects => this.setState({ subjects }))
    }

    getSubjectsTenToEleven = () => {
        const baseUrl = './subjects10to11.json';
        fetch(baseUrl)
            .then(response => response.json())
            .then(subjects => this.setState({ subjects }))
    }

    componentDidMount() {
        this.getAllGrades();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectGrade > 9) {
            this.getSubjectsTenToEleven()
        } else {
            this.getSubjectsSixToNine();
        }
    }

    render() {
        const {
            grades,
            selectGrade,
            subjects,
            selectSubject,
            assignments
        } = this.state;
        const filterAssignments = assignmentSelector(assignments, selectGrade, selectSubject);
        return (
            <Fragment>
                <HeroSection>
                    <div className="container">
                        <RowWithCol col="col-md-8 offset-md-2">
                            <Header />
                            <FilterOptions
                                grades={grades}
                                selectGrade={selectGrade}
                                subjects={subjects}
                                selectSubject={selectSubject}
                                handleOnChangeGrade={this.handleOnChangeGrade}
                                handleOnChangeSubject={this.handleOnChangeSubject}
                                handleOnClickAssignment={this.handleOnClickAssignment}
                            />
                        </RowWithCol>
                    </div>
                </HeroSection>
                <div className="container">
                    <RowWithCol>
                        <Panel>
                            {assignments.length === 0 ? <Info /> : <AssignmentTable assignments={filterAssignments} />}
                        </Panel>
                    </RowWithCol>
                </div>
            </Fragment>
        );
    }
};

export default App;