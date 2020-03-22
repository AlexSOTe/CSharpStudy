import { HomeState } from "../types/AppState";
import { Dispatch } from "redux";
import { SetName } from "../store/Actions";
import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateTpProps = (homeState: HomeState): HomeState => ({ ...homeState });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  SetName: (name: string) => dispatch(SetName(name))
})

export default connect(mapStateTpProps, mapDispatchToProps)(Home);
