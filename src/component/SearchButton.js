import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from "react-router-dom";

import '../css/searchButton.css';



const SearchButton = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const history = useHistory();


  const items = [
      {
        name:"Handbags",
        key:"1"
      },
      {
        name:"Shoes",
        key:"2"
      },
      {
        name:"Women",
        key:"3"
      }
      
  ];

  
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      history.push(`/search?key=${e.target.value}`);
      toggle();
    }
  }

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="search-button" style={{ backgroundColor: "rgba(0,0,0,0)", border:"none", borderRadius: "5px"}}>
        <FaSearch className="icon-search"/>
      </DropdownToggle>
      <DropdownMenu>
        <div className="search-container">
            <FaSearch className="icon-search-input"/>
            <input type="text" className="search-input" placeholder="Nhap vao de tim kiem" onKeyPress={_handleKeyDown}/>
        </div>
        <div style={{borderBottom: "1px solid black", margin: "0px 20px"}}></div>
        <div style={{margin:"0px 20px", marginTop:"20px"}}>
            <p>TRENDING</p>
            {items.map((item)=>
                <div style={{display:"flex", flexDirection: "row"}} key={item.key}>
                    <FaSearch style={{marginTop:"2px"}}/>
                    <p style={{marginLeft:"20px"}}>{item.name}</p>
                </div>
            )}
        </div>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default SearchButton;