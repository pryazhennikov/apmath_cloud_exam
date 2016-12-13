import React                    from 'react';
import MuiThemeProvider         from 'material-ui/styles/MuiThemeProvider';

/**
 * React Class Root. Самый базовый класс. Точка входа.
 *
 * @class
 */
class Root extends React.Component {
    static propTypes = {
        children: React.PropTypes.object
    };

    /**
     * Метод для отрисовки компонента
     *
     * @return {JSX}
     * @public
     */
    render() {
        return (
            <MuiThemeProvider>
                <div className="page">
                    { this.props.children }
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Root;
