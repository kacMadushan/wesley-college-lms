import React from 'react';

const RowWithCol = (props) => {
    const { col, children } = props;
    return (
        <div className="row">
            <div className={col}>{children}</div>
        </div>
    );
};

RowWithCol.defaultProps = {
    col: 'col-md-12'
};

export default RowWithCol;