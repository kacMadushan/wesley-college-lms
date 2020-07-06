// Assignments visibility
export default (assignments, getGrade, getSubject) => {
    return assignments.filter((assign) => {
        const matchSubject = assign.subjectNam.includes(getSubject);
        const matchGrade = assign.gradeNum.includes(getGrade);

        return matchSubject && matchGrade
    })
}