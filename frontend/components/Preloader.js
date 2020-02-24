import React from 'react';

const Preloader = () =>{
    return (
        <div id="preloader" >
            <div id="ctn-preloader" className="ctn-preloader">
                <div className="animation-preloader">
                    <div className="spinner"></div>
                    <div className="txt-loading">
                        <span data-text-preloader="N" className="letters-loading">
                            N
                        </span>
                        <span data-text-preloader="E" className="letters-loading">
                            E
                        </span>
                        <span data-text-preloader="U" className="letters-loading">
                            U
                        </span>
                        <span data-text-preloader="R" className="letters-loading">
                            R
                        </span>
                        <span data-text-preloader="O" className="letters-loading">
                            O
                        </span>
                        <span data-text-preloader="F" className="letters-loading">
                            F
                        </span>
                        <span data-text-preloader="I" className="letters-loading">
                            I
                        </span>
                        <span data-text-preloader="T" className="letters-loading">
                            T
                        </span>
                    </div>
                    <p className="text-center">Loading</p>
                </div>
                <div className="loader" style={{width: '150%'}}>
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader