import React, {Component} from "react";
import PropTypes from 'prop-types'
import './../index.css'
import Spinner from "../Spinner";

export class Page extends Component{

    onBtnClick = e => {
        const year = +e.currentTarget.innerText
        this.props.getPhotos(year)
    }
    render() {
        const {year, photos, isFetching} = this.props
        return(
            <div>
                <div>
                    <button className='btn' onClick={this.onBtnClick}>
                        2018
                    </button>
                    <button className='btn' onClick={this.onBtnClick}>
                        2017
                    </button>
                    <button className='btn' onClick={this.onBtnClick}>
                        2016
                    </button>
                    <button className='btn' onClick={this.onBtnClick}>
                        2015
                    </button>
                    <button className='btn' onClick={this.onBtnClick}>
                        2014
                    </button>
                </div>
                <h3>{year} год</h3>
                {isFetching ? <Spinner/> : <p>У тебя {photos.length}</p>}
            </div>
        )
    }

}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos:PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
}