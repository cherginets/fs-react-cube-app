import React, {Component} from 'react';
import Cube from "fs-react-cube"
import './App.css';

class App extends Component {
    state = {
        measures: [
            {
                name: "Measure 1 (Regions)",
                code: 'regions',
                tree: {
                    name: "All regions",
                    childs: [
                        {
                            name: "Russia",
                            childs: [
                                {
                                    name: "Moscow",
                                },
                                {
                                    name: "Lipetsk",
                                },
                                {
                                    name: "Voronesh",
                                },
                            ]
                        },
                        {
                            name: "USA",
                            childs: [
                                {
                                    name: "California",
                                },
                                {
                                    name: "Washington",
                                },
                            ]
                        },
                        {
                            name: "Georgia",
                        }
                    ]
                },
            },
            {
                name: "Measure 2 (Products)",
                code: 'products',
                tree: {
                    name: "All products",
                    code: "all_products",
                    childs: [
                        {name: "Paper"},
                        {name: "Tables"},
                        {name: "Pencils"},
                    ]
                }
            },
            {
                name: "Measure 3 (Years)",
                code: 'years',
                tree: {
                    name: "All years",
                    code: "all_years",
                    hidden_childs: false,
                    childs: [
                        {name: "2018", childs: [{name: "Q 1"}, {name: "Q 2"}, {name: "Q 3"}, {name: "Q 4"}]},
                        {name: "2017", childs: [{name: "Q 1"}, {name: "Q 2"}, {name: "Q 3"}, {name: "Q 4"}]},
                        {name: "2016", childs: [{name: "Q 1"}, {name: "Q 2"}, {name: "Q 3"}, {name: "Q 4"}]},
                    ]
                }
            },
            {
                name: "Measure 4 (Scenarios)",
                code: 'scenarios',
                tree: {
                    name: "All scenarios",
                    code: "all_scenarios",
                    hidden_childs: false,
                    childs: [
                        {name: "Actual"},
                        {name: "Budget"},
                    ]
                }
            },
        ],
        measures_list_top: {
            1: ['regions', 'products'],
            2: ['regions'],
            3: ['scenarios'],
            4: ['regions', 'products', 'years'],
        },
        measures_list_left: {
            1: ['years', 'scenarios'],
            2: ['years'],
            3: ['regions', 'products', 'years'],
            4: ['scenarios'],
        },
        cur_measures_variant: 1,
    };

    render() {
        return (
            <div className="App">
                <button onClick={() => {
                    this.setState({cur_measures_variant: this.state.cur_measures_variant + 1 > 4 ? 1 : this.state.cur_measures_variant + 1})
                }} style={{marginBottom: "10px"}}>change measures
                </button>
                <Cube
                    measures={this.state.measures}
                    measures_list_top={this.state.measures_list_top[this.state.cur_measures_variant]}
                    measures_list_left={this.state.measures_list_left[this.state.cur_measures_variant]}
                    getCell={(path_left, path_top) => {
                        console.group('getCell');
                        console.info('path_left', path_left);
                        console.info('path_top', path_top);
                        console.groupEnd();
                        return path_left.concat(path_top).join('').split('').map(function (char) {
                            return char.charCodeAt(0) * 2;
                        }).reduce((acc, cur) => acc + cur);
                    }}
                    debug={true}
                />
            </div>
        );
    }
}

export default App;
