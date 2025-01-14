import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function VariantsExample() {
  return (
    <div style={{display:'flex'}}>
      {['BRANDS ', 'PRODUC TYPE ', 'STOCK STATUS ', 'PRICE ', 'MORE FILTERS' ].map((variant) => (
        <DropdownButton
          key={variant}
          id={`dropdown-variants-${variant}`}
          variant={variant.toLowerCase()}
          title={variant}
          className="mb-2" // Adding margin-bottom for spacing between buttons
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
      ))}
    </div>
  );
}

export default VariantsExample;
