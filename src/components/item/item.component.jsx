
  
function Item(props) {
    const { title } = props.item;
    return (
      <div className="items">
       <ul>
           <li>{title}</li>
        </ul> 
      </div>
    );
}
  
  export default Item;
  