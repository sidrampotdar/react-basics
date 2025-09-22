import PropTypes from 'prop-types'
function Student(props){

    return(
        <div className="student">
        <p >Name: {props.name}</p>
        <p >Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes":"No"}</p>
        </div>
    );
}
// propTypes = a mechanism that ensures that the passed value
// is of the correct datatype.
// age: PropTypes.number


Student.protoType={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}

export default Student