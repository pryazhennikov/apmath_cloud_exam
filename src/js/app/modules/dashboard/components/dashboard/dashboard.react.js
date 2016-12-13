import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import _                        from 'lodash';
import { If, Then, Else }       from 'react-if';
import actionCreators           from 'actions';
import dashboardActions         from '../../actions';

const mapStateToProps = state => ({
    allChartData: state.allChartData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(_.pick(actionCreators, Object.keys(dashboardActions)), dispatch);

/**
 * React Container Component - Dashboard.
 * Класс отвечает за главный компонент на /dashboard
 *
 * @class
 */
class Dashboard extends React.Component {
    static propTypes = {

    };

    static defaultProps = {

    };

    state = {};

    /**
     * Компонент замаунтился
     *
     * @public
     */
    componentDidMount() {

    }

    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        return (
            <div className="container">
                <h2>- Dashboard page -</h2>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
