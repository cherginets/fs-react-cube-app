import React, { Component } from 'react';
import Cube from "fs-react-cube"
import './App.css';

class App extends Component {
    state = {
        measures: [
            {
                name: "Regions",
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
                name: "Products",
                code: 'products',
                tree: {
                    name: "All products",
                    code: "all_products",
                    hidden_childs: false,
                    childs: [
                        {name: "Paper"},
                        {name: "Tables"},
                        {name: "Pencils"},
                    ]
                }
            },
            {
                name: "Years",
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
                name: "Scenarios",
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
            4: ['regions', 'products', 'scenarios'],
        },
        measures_list_left: {
            1: ['years', 'scenarios'],
            2: ['years'],
            3: ['regions', 'products', 'years'],
            4: ['years'],
        },
        cur_measures: 4,
        count: 23,
    };

  render() {
    return (
      <div className="App">
        <Cube
          columns={this.state.measures}
          columns_top={this.state.measures_list_top[this.state.cur_measures]}
          columns_left={this.state.measures_list_left[this.state.cur_measures]}
          onOpenCells={(cells) => {
              console.log('onOpenCells', cells);
              return 1;
          }}
          data={[
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]
          ]}
          debug={true}
        />
          <button onClick={() => {
              this.setState({cur_measures: this.state.cur_measures === 1 ? 2 : 1})
          }}>change measures</button>
          <div style={{marginTop: "20px"}}>
              <button onClick={() => this.setState({count: this.state.count + 1})}>count++</button>{this.state.count}
          </div>
      </div>
    );
  }
}

export default App;
