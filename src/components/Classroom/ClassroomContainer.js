import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as classroomActions from '../../actions/classroomActions';
import Classroom from './Classroom';

const mapStateToProps = ({ classroom }) => {
    return {
        classroom,
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(classroomActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);