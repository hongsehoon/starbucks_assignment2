import React, { Component } from 'react';

class Validatorponenet extends Component {
    render() {
        return (
            <React.Fragment> 
                <div className="validator">
                    <p className="validator-css">
                    <a href="http://css-validator.kldp.org/check/referer" title="validator-css">
                        <img style={{border:'0',width:'80px',height:'15px'}}
                            src="//css-validator.kldp.org/images/validate/css-blue"
                            alt="올바른 CSS입니다!" />
                    </a>
                    </p>
                </div>
            </React.Fragment> 
        );
    }
}

export default Validatorponenet;