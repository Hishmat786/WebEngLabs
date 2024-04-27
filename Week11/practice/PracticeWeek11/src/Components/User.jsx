export const Users = () => {
    const users = ["Zack", "Phill", "Tony", "Loki", "Sylvie", "Nat", "Thor","Zahid","Hazur"];
    const std={name:"Hishmat"}
    return (
      <>
        <h1> users</h1>
        {users.filter(name => name.startsWith('Z')).map   (filteredName => (
            <li>
                {filteredName}
            </li>
        ))}

        {/* <h3> {users}</h3>
        {JSON.stringify(std)} */}
      </>
    );
};