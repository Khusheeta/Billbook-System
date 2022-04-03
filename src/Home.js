import Login from './Auth';
import './index.css';
const Home = (props) => {
  return (
    <div className='disp'>
        <br></br>
      <th >ID:</th>  <td>{props.info.id}</td>
      <br></br>
    
      <th scope="row">Name:</th>
      <td>{props.info.full_name}</td>
      <br></br>
  
      <th >Role ID: </th>
      <td >{props.info.RoleId}</td>
      <br></br>

      <th >Role Name:</th>
      <td >{props.info.role}</td>
      <br></br>

      <th >Token:</th>
     <p> <td class="token">{props.info.token}</td></p>
      <br></br>
    </div>
  );
}

export default Home
