import React from "react";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';

type Sources = any
type DeltaStatic = any

type EditorProps = {
  value: ReactQuill.Value | undefined,
  onChange: (value: string, delta: DeltaStatic, source: Sources, editor: ReactQuill.UnprivilegedEditor) => void
}

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ]
  };
  
const formats = [
'header',
'bold', 'italic', 'underline', 'strike', 'blockquote',
'list', 'bullet', 'indent',
'link', 'image'
];

export default function Editor({value, onChange} : EditorProps) {
    return (
        <ReactQuill
            value={value}
            modules={modules}
            formats={formats}
            onChange={onChange}
        />
    )
}