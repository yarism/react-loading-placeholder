import React, {Component} from 'react'
import {render} from 'react-dom'

import LoadingPlaceholder from '../../src'

class Demo extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div style={{width: '800px', margin: '0 auto'}}>
                <h1>react-loading-placeholder Demo</h1>
                <div style={{marginBottom: '80px'}}>
                    <h3>Simple table or list</h3>
                    <LoadingPlaceholder numberOfRows={10} heightOfRows={40} spaceBetween={10}></LoadingPlaceholder>
                </div>

                <div style={{marginBottom: '80px'}}>
                    <h3>Table with filter</h3>
                    <LoadingPlaceholder numberOfRows={3} tableLayout={true} heightOfRows={60} spaceBetween={20} filterOptions={{width: 300, height: 50}}></LoadingPlaceholder>
                </div>
            </div>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
