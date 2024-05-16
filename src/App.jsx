import './App.css';
import { useRef, useReducer } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

const mockData = [];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => (item.id === action.targetId ? { ...item, isDone: !item.isDone } : item));
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(1);

  const onCreate = (title, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        title: title,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      <Header title="할일 목록" />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;