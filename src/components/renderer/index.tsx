import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { View } from 'vega';
import * as EditorActions from '../../actions/editor';
import { State } from '../../constants/default-state';
import Renderer from './renderer';

export function mapStateToProps(state: State, ownProps) {
  return {
    baseURL: state.baseURL,
    editorString: state.editorString,
    mode: state.mode,
    renderer: state.renderer,
    vegaLiteSpec: state.vegaLiteSpec,
    vegaSpec: state.vegaSpec,
    view: state.view,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<EditorActions.Action>) {
  return bindActionCreators(
    {
      setView: EditorActions.setView,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Renderer);
