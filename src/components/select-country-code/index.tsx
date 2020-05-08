import React, { ReactNode } from 'react';

import CountryCode from './dict/country-code.json';


interface OwnProps {
    countryCode?: string;
}


export default class SelectCountryCode extends React.PureComponent<OwnProps> {
    
    countryCodeInputRef:React.RefObject<HTMLInputElement> = React.createRef();



    handleCountryChanged = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const code = `+${e.target.value}`;
        if (this.countryCodeInputRef.current) {
            this.countryCodeInputRef.current.value = code;
        }
        console.log('code',code);
    }

    render():ReactNode {
        const {countryCode = "86"} = this.props;
        return (
            <div className="select-country-code-container">
                <div className="select-country-code-container__row">
                    <div className="select-country-code__selector-label" >国家/地区</div>
                    <select className="select-country-code__selector"onChange={this.handleCountryChanged} defaultValue={countryCode} id="">
                        {CountryCode.map(cc => <option value={cc.code} key={cc.iso}>{cc.country}</option>)}    
                    </select>
                    <div className="select-country-code__selector-icon">&nbsp;</div>
                </div>
                <div className="select-country-code-container__row">
                    <div className="select-country-code__code-container">
                        <input className="select-country-code__code-editor" ref={this.countryCodeInputRef} defaultValue={`+${countryCode}`}/>
                    </div>
                    <div className="select-country-code__code-children">{this.props.children}</div>
                </div>
            </div>
            );
    }
}