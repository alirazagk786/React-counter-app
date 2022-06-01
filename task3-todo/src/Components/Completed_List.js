const Completed_List = ({ filter_data ,handleDelete}) => {
  return (
    <div className="completed_list">
      <h3>Completed List</h3>
      <ul>
        {filter_data.map((data, index) => (
          <li key={index}>{data} <button onClick={()=>handleDelete(data,'com')}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Completed_List;
