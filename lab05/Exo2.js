function DisplayTab({ tab }) {
    return (
      <ul>
        {tab.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  
  export default DisplayTab;
  function DisplayTab({ tab }) {
    return (
      <ul>
        {tab.map((item, index) => (
          <li key={index}>Element {index + 1} is: {item}</li>
        ))}
      </ul>
    );
  }
  
  export default DisplayTab;
  function DisplayTab({ tab }) {
    const [list, setList] = useState(tab);
  
    const handleRemove = (index) => {
      setList(list.filter((_, i) => i !== index));
    };
  
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => handleRemove(index)}>
            Element {index + 1} is: {item}
          </li>
        ))}
      </ul>
    );
  }
  
  export default DisplayTab;
  function DisplayTab({ tab }) {
    return (
      <ul>
        {tab.map((item, index) => (
          <li key={index}>Element {index + 1} is: {item}</li>
        ))}
      </ul>
    );
  }
//   ************************
  export default DisplayTab;
  function App() {
    const table1 = ["hello", "world", "from", "react"];
    const table2 = ["this", "is", "a", "test"];
  
    return (
      <div>
        <h2>Table 1</h2>
        <DisplayTab tab={table1} />
        <h2>Table 2</h2>
        <DisplayTab tab={table2} />
      </div>
    );
  }
  
  export default App;
          