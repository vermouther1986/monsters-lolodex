import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonster] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log("rendered");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);
  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilteredMonsters);
    console.log("xiajing");
  }, [monsters, searchField]);

  const onSeachChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    // this.setState(() => {
    //   return { searchField };
    // });
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Xiajin</h1>

      <SearchBox
        Handerl={onSeachChange}
        placeholder="search monsters"
        className="monster-search-box"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             // console.log(this.state);
//           }
//         )
//       );
//   }
//   onSeachChange = (event) => {
//     // console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSeachChange } = this;
//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Xiajin</h1>
//         {/* <input
//           className="search-box"
//           type="search"
//           placeholder="search monsters"
//           onChange={onSeachChange}
//         /> */}
//         {/* {filteredMonster.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//         })} */}
//         {/* <SearchBox onChangeHandler={onSeachChange} /> */}
//         <SearchBox
//           Handerl={onSeachChange}
//           placeholder="search monsters"
//           className="monster-search-box"
//         />
//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }

export default App;
