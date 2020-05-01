import React, {Component} from "react";
import PropTypes from 'prop-types'
import './../index.css'

export class Page extends Component{

    onBtnClick = e => {
        const year = +e.target.innerText;
        this.props.setYear(year)
    }
    render() {
        const {year, photos} = this.props
        return(
            <div >
                <div>
                    <button className='btn' onClick={this.onBtnClick}>2018</button>
                    <button className='btn' onClick={this.onBtnClick}>2017</button>
                    <button className='btn' onClick={this.onBtnClick}>2016</button>
                    <button className='btn' onClick={this.onBtnClick}>2015</button>
                    <button className='btn' onClick={this.onBtnClick}>2014</button>
                </div>
                <h3 className="page"> У тебя {photos.length} фото, за {year} год</h3>
            </div>
        )
    }

}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos:PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
}