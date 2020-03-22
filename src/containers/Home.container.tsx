import { AppState, HomeState } from "../types/AppState";
import { Dispatch } from "redux";
import { SetName } from "../store/Actions";
import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateTpProps = (state: AppState): HomeState => state.Home;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  SetName: (name: string) => dispatch(SetName(name))
})

export default connect(mapStateTpProps, mapDispatchToProps)(Home);
