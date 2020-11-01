'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { liked: false }
    }

    render() {
        if(this.state.liked){
            return 'You clicked a React button';
        }

        return e(
            'button',
            {onClick: () => this.setState({liked: true})}, 
            "React Button"
        );
    }
}

const domContainer = document.querySelector('#like-button-container');
ReactDOM.render(e(LikeButton), domContainer);