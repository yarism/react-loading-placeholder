import React, {Component} from 'react';
import styles from './LoadingPlaceholder.css';

const defaultMarginTop = 40;
const defaultSpaceBetween = 10;
const defaultHeightOfRows = defaultMarginTop + defaultSpaceBetween;

const placeholderOptions = {
    heightOfRows: defaultHeightOfRows,
    marginTop: defaultMarginTop,
    spaceBetween: defaultSpaceBetween
};

const filterOptions = {
    marginTop: 90,
    width: 400,
    height: 50
}

class LoadingPlaceholder extends Component {
    constructor(props) {
        super(props);
    };

    componentWillMount() {
        this._setStartValues();
        this._calculateHeight();
    };

    _setStartValues() {
        placeholderOptions.marginTop = defaultMarginTop;
        placeholderOptions.spaceBetween = this.props.spaceBetween || defaultSpaceBetween;
        if (this.props.heightOfRows) {
            placeholderOptions.heightOfRows = this.props.heightOfRows + placeholderOptions.spaceBetween;
            placeholderOptions.marginTop = this.props.heightOfRows;
        }
        else {
            placeholderOptions.heightOfRows = defaultHeightOfRows + this.props.spaceBetween || defaultHeightOfRows;
        }

        if (this.props.filterOptions) {
            filterOptions.width = this.props.filterOptions.width;
            filterOptions.height = this.props.filterOptions.height;
            if (this.props.filterOptions.marginTop) {
                filterOptions.marginTop = this.props.filterOptions.marginTop;
            }
        }
    };

    _calculateNumberOfRows() {
        let _numberOfRows = this.props.numberOfRows;
        if (this.props.tableLayout) {
            _numberOfRows = _numberOfRows + 1;
        }
        return _numberOfRows;
    };

    _calculateHeight() {
        let _height = placeholderOptions.marginTop;
        if (this.props.tableLayout) {
            _height = filterOptions.marginTop;
        }
        for (let i = 1; i < this._calculateNumberOfRows(); i++) {
            _height = _height + placeholderOptions.heightOfRows;
        };
        return _height;
    };

    _convertToPixels(_int) {
        return _int.toString() + 'px';
    };

    _renderRows() {
        let _rows = [];
        if (this.props.tableLayout) {
            placeholderOptions.marginTop = filterOptions.marginTop;
        }
        for (let i = 1; i < this._calculateNumberOfRows(); i++) {
            let marginTopString = this._convertToPixels(placeholderOptions.marginTop);
            _rows.push(<div key={i} style={{background: 'white', width: '100%', height: this._convertToPixels(placeholderOptions.spaceBetween), marginTop: marginTopString, position: 'absolute'}}></div>);
            placeholderOptions.marginTop = placeholderOptions.marginTop + placeholderOptions.heightOfRows;
        }
        this._setStartValues();
        return _rows;
    };

    _tableLayout() {
        return (
            <div>
                <div style={{background: 'white', width: '100%', marginLeft: this._convertToPixels(filterOptions.width), height: this._convertToPixels(filterOptions.height), position: 'absolute', top: '0'}}></div>
                <div style={{background: 'white', width: '100%', height: this._convertToPixels(filterOptions.height), marginTop: this._convertToPixels(filterOptions.height), position: 'absolute'}}></div>
            </div>
        )
    };

    render() {
        return (
            <div className="animated__background" style={{height: this._convertToPixels(this._calculateHeight())}}>
                {this.props.tableLayout && this._tableLayout()}
                {this._renderRows()}
            </div>
        );
    }
}

export default LoadingPlaceholder;
