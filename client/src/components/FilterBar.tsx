import React, {useState} from 'react'

function FilterBar() {
  const [active, setActive] = useState(1)

  const choices = [
    { id: 1, name: "All",},
    { id: 2, name: "Company"},
    { id: 3, name: "Sustainability"},
    { id: 4, name: "Economy" },
  ]
 
  function onClick(id : number) {
    setActive(id)
  }

  return (
    <div className="filter-bar">
        <div>
          {choices.map(choice => (
            <p
              key={choice.id}
              className={active === choice.id ? "active" : ""}
              onClick={() => onClick(choice.id)}
            >
              {choice.name}
            </p>
          ))}
        </div> 
    </div>
  )
}

export default FilterBar