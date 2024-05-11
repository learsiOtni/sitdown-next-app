"use client"

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import classes from "./TiptapRender.module.css";

export default ({content, fullView} : {content: any, fullView?: boolean}) => {

  const editor = useEditor({
    editorProps:{
        attributes: {
            class: `${classes.tiptapEditor} prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc`
        }
    },
    editable: false,
    content: content,
    extensions: [
        StarterKit,
    ],
  })

  if (!editor) {
    return null
  }

  return (
    <div className={`pt-2.5 ${!fullView && classes.container}`}>
        {!content.type ? (
            <p className="text-body">{content}</p>
        ) : (
            <EditorContent editor={editor} />
        )}
    </div>
  )
}