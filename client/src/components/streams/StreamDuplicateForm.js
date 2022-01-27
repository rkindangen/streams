import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamDuplicateForm extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.createStream(formValues);
    };

    render() {
        if(!this.props.stream) {
            return "Loading";
        }
        return (
            <StreamForm
                //make inital values not modifiable
                initialValues = {_.pick(this.props.stream, 'title', 'description')}
                onSubmit = {this.onSubmit}
            />
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
  };

  
export default connect (mapStateToProps, {fetchStream, createStream})(StreamDuplicateForm);