import Item from "../item/item.component";


function Items(props) {
  const {lists} = props
  return (
    <div className="items">
      {
        lists.map((item) => 
          <Item key={item.id} item={item}/>
        )
      }
    </div>
  );
}

export default Items;
