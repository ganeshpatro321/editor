import * as React from 'react';
import App from './app';

interface Props {
  reset?: boolean;
}

export default class Reset extends React.Component<Props> {
  constructor(props) {
    super(props);
  }
  public componentDidMount() {
    if (this.props.reset) {
      window.localStorage.clear();
    }
  }
  public render() {
    return <App />;
  }
}
