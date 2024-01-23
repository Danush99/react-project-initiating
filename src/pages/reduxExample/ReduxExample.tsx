import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/redux/store";

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "src/redux/counter";

import {
  addStudent, 
  removeStudentById, 
  popStudent,
  getAllStudentsAsync,
} from "src/redux/student";

import {
  addUser, 
  removeUser,
  userLogin,
  userLogout,
} from "src/redux/user";

export default function ReduxExample() {
  const count = useSelector((state: RootState) => state.counter.value);
  const students = useSelector((state: RootState) => state.student.students);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const showStudents = (): JSX.Element[] => {
    return students.map((item, index) => {
      return (
        <div key={index}>
          name : {item.name} <br/>
          id : {item.id} <br/>
          age : {item.age} <br/>
        </div>
      );

    });
  }

  const showUser = (): JSX.Element => {
    return (
      <div>
      name : {user?.userName} <br/>
      id : {user?.id} <br/>
      age : {user?.role} <br/>
    </div>
    );
  };
  

  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <div>
          <button onClick={() => dispatch(incrementAsync(10))}>incrementAsync</button>
          <button onClick={() => dispatch(incrementByAmount(10))}>incrementByAmount</button>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
      <div>
        <h2>Object array:</h2>
        <div>{showStudents()}</div>
        <div>
          <button onClick={() => dispatch(addStudent({name:'supul',id:"sadsad213",age:45}))}>addStudent</button>
          <button onClick={() => dispatch(removeStudentById('sadsad213'))}>removeStudentById</button>
          <button onClick={() => dispatch(popStudent())}>popStudent</button>
          <button onClick={() => dispatch(getAllStudentsAsync(45))}>getAllStudentsAsync</button>
        </div>
      </div>
      <div>
        <h2>User object:</h2>
        <div>{showUser()}</div>
        <div>
          <button onClick={() => dispatch(addUser({userName:'supul',id:"sadsad213",role:"USER"}))}>addUser</button>
          <button onClick={() => dispatch(removeUser())}>removeUser</button>
          <button onClick={() => dispatch(userLogin({email: 'dan@gmail.com', password: 'sadasfb324;'}))}>Login</button>
          <button onClick={() => dispatch(userLogout())}>Logout</button>
        </div>
      </div>
    </>
  );
}
