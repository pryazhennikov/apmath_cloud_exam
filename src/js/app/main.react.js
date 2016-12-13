import React        from 'react';

/**
 * React Class Main. Главный компонент, в который происходит рендер данных
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
     * @render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default Root;
