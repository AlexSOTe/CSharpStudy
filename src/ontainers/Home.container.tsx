/// 页面容器
import { HomeState } from "../types/AppState";
import { Dispatch } from "redux";
import { SetName } from "../store/Actions";
import { connect } from "react-redux";
import Home from "../components/Home";

/**
 * mapStateToProps将当前store里的数据以我们的组件需要的形式传递到组件。
 * @param {HomeState} homeState
 * @returns  {HomeState} homeState 页面需要的数据结构
 */
const mapStateToProps = (homeState: HomeState): HomeState => ({ ...homeState });

/**
 * mapDispatchToProps利用dispatch函数，创建回调props将actions送到store。
 */
const mapDispatchToProps = (dispatch: Dispatch) => ({
  SetName: (name: string) => dispatch(SetName(name))
})
// 将数据连接至页面
export default connect(mapStateToProps, mapDispatchToProps)(Home);
