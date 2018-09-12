import React from 'react';
import PropTypes from 'prop-types';
import { SearchField } from '@edx/paragon';

import WrappedMessage from '../../utils/i18n/formattedMessageWrapper';
import messages from './displayMessages';
import './AssetsSearch.scss';

export default class AssetsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.assetsSearch.search };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.assetsSearch.search) {
      this.setState({ value: nextProps.assetsSearch.search });
    }
  }

  submit = () => {
    this.props.updateSearch(this.state.value, this.props.courseDetails);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <SearchField
        onSubmit={this.submit}
        onChange={this.handleChange}
        inputLabel={<WrappedMessage message={messages.assetsSearchInputLabel} />}
        screenReaderText={{
          clearButton: <WrappedMessage message={messages.assetsClearSearchButtonLabel} />,
          searchButton: <WrappedMessage message={messages.assetsSearchSubmitLabel} />,
        }}
        value={this.state.value}
      />
    );
  }
}


AssetsSearch.propTypes = {
  assetsSearch: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  courseDetails: PropTypes.shape({
    lang: PropTypes.string,
    url_name: PropTypes.string,
    name: PropTypes.string,
    display_course_number: PropTypes.string,
    num: PropTypes.string,
    org: PropTypes.string,
    id: PropTypes.string,
    revision: PropTypes.string,
    base_url: PropTypes.string,
  }).isRequired,
  updateSearch: PropTypes.func.isRequired,
};
