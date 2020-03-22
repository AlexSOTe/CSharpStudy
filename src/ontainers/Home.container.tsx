/// ҳ������
import { HomeState } from "../types/AppState";
import { Dispatch } from "redux";
import { SetName } from "../store/Actions";
import { connect } from "react-redux";
import Home from "../components/Home";

/**
 * mapStateToProps����ǰstore������������ǵ������Ҫ����ʽ���ݵ������
 * @param {HomeState} homeState
 * @returns  {HomeState} homeState ҳ����Ҫ�����ݽṹ
 */
const mapStateToProps = (homeState: HomeState): HomeState => ({ ...homeState });

/**
 * mapDispatchToProps����dispatch�����������ص�props��actions�͵�store��
 */
const mapDispatchToProps = (dispatch: Dispatch) => ({
  SetName: (name: string) => dispatch(SetName(name))
})
// ������������ҳ��
export default connect(mapStateToProps, mapDispatchToProps)(Home);
