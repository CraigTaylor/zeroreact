import { render, Component, zero_react_create } from './zero-react.js'

class MyComponent extends Component{
    render(){
        return <div><h1>zero component</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent id="a" class="c">
    <div>abc</div>
    <div/>
    <div/>
</MyComponent>, document.body);