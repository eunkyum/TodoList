// import { useRef, useState } from 'react';
// import './Editor.css';

// const Editor = ({ onCreate }) => {
//   const [content, setContent] = useState('');
//   const inputRef = useRef();

//   const onChangeContent = (e) => {
//     setContent(e.target.value);
//   };

//   const onKeydown = (e) => {
//     if (e.keyCode === 13) {
//       onSubmit();
//     }
//   };

//   const onSubmit = () => {
//     if (content === '') {
//       inputRef.current.focus();
//       return;
//     }
//     onCreate(content);
//     setContent('');
//   };

//   return (
//     <div className="Editor">
//       <input
//         ref={inputRef}
//         value={content}
//         onChange={onChangeContent}
//         onKeyDown={onKeydown}
//         placeholder="할일을 입력해주세요."
//       />
//       <button onClick={onSubmit}>추가</button>
//     </div>
//   );
// };

// export default Editor;

// Editor.jsx

import { useRef, useState } from 'react';
import './Editor.css';

const Editor = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleRef = useRef();
  const contentRef = useRef();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (title === '') {
      titleRef.current.focus();
      return;
    }
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div className="Editor">
      <input ref={titleRef} value={title} onChange={onChangeTitle} placeholder="제목을 입력해주세요." />
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown}
        placeholder="할일을 입력해주세요."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
