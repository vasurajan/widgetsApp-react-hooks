import React, { useState } from 'react';
// whenever we call useState, We get back an array with exactly two elements inside of it.


const Accordion = ({ items }) => {
    //array destructuring
    // first argument coming back from calling useState is the piece of state that we are trying to keep track of.
    //this is a reference to some variable or some assuming some value that is going to change over time.

    //The second element inside the array setActiveIndex is a function that we call to update our piece of state.
    // Whenever we call this function to update our peice of state, it causes the component to re-render
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick = (index) => {
        // making sure we update our value of our piece of state.
        setActiveIndex(index);
    }
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? "active" : "";
        //Fragments let you group a list of children without adding extra nodes to the DOM.
        return <React.Fragment key={item.title}>
            <div className={`title ${active}`}
                onClick={() => onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}


export default Accordion;

//take a look at the index that we are currently iterating over and then compare it to the active index piece of state
//If they are equal to each other, then we will want to add the class name of active to the required div