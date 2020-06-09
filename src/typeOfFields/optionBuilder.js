import React, { Component } from 'react';


class OptionBuilder extends Component {



    //initial state
    constructor(props){
        super();
        this.state = {
            resultOption: props.jsonData[props.formJson.name] || [{pos: 1, label: "", value: ""}]
        }
        props.jsonCollector({[props.formJson.name]: this.state.resultOption})
    }



    counter = 2

    getCounter = ()=>{
        return this.counter++
    }


    render() {
        return (
            <div className="field-input">
                <label className="mainLabel">
                    {/*Label*/}
                    <span data-tip={this.props.formJson.description}>
                        {this.props.formJson.label}
                        {(this.props.formJson.required)?(<span className="requiredStar">*</span>):("")}
                    </span>
                    <div className="optionFields">
                        <ul>
                            {this.state.resultOption.map((item, index)=>(
                                <li key={item.pos}>
                                    <span className="index">{index+1}.</span>
                                    <input type="text" className="form-control" placeholder="Label" value={item.label || ""} onChange={(e)=>{
                                        this.setState({
                                            ...this.state,
                                            resultOption: [
                                                ...this.state.resultOption.map(elem=>{
                                                    if(elem.pos == item.pos)
                                                        elem.label = e.target.value
                                                    return elem
                                                })
                                            ]
                                        },()=>{
                                            this.props.jsonCollector({[this.props.formJson.name]: this.state.resultOption})
                                        })
                                    }}/>
                                    <input type="text" className="form-control" placeholder="Value" value={item.value || ""} onChange={(e)=>{
                                        this.setState({
                                            ...this.state,
                                            resultOption: [
                                                ...this.state.resultOption.map(elem=>{
                                                    if(elem.pos == item.pos)
                                                        elem.value = e.target.value
                                                    return elem
                                                })
                                            ]
                                        },()=>{
                                            this.props.jsonCollector({[this.props.formJson.name]: this.state.resultOption})
                                        })
                                    }}/>
                                    {(item.pos==1)?(""):(
                                            <button
                                                className="btn btn-secondary btn-remove-option"
                                                title="Remove option"
                                                onClick={()=>{
                                                    this.setState({
                                                        ...this.state,
                                                        resultOption: [
                                                            ...this.state.resultOption.filter((elem)=>{
                                                                if(elem.pos == item.pos)
                                                                    return false
                                                                return true
                                                            })
                                                        ]
                                                    })
                                                }}
                                            ><i className="material-icons">cancel</i></button>
                                        )}
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-secondary" onClick={()=>{
                            this.setState({
                                ...this.state,
                                resultOption: [
                                    ...this.state.resultOption,
                                    {pos: this.getCounter(), label: "", value: ""}
                                ]
                            })
                            this.getCounter()
                        }}><i className="material-icons">add</i>Add option</button>
                    </div>
                </label>
            </div>
        );
    }
}



export default OptionBuilder;