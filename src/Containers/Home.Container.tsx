/// ҳ������
import { HomeState } from "../Types/AppState";
import { Dispatch } from "redux";
import { SetName } from "../Store/Actions";
import { connect } from "react-redux";
import Home from "../Components/Home";

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
