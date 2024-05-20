'use client'

import { useEditor, EditorContent, JSONContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from '../Toolbar/Toolbar'
import classes from './Tiptap.module.css'
import Underline from '@tiptap/extension-underline'
import { CustomInput } from '../Input/Input'


export default function Tiptap({ onChange, error, value}: CustomInput) {

    const editor = useEditor({
        editorProps:{
            attributes: {
                class: `${classes.tiptapEditor} prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc`
            }
        },
        content: value,
        extensions: [
            StarterKit,
            Underline,
        ],
    })

    const handleContentChange = (content: JSONContent) => {
        onChange("body", content)
    }

    editor?.on('update', ({ editor }) => {
        // The content has changed.
        handleContentChange(editor?.getJSON())
    })

    return (
        <div className={`${classes.container} ${error && "border-error"}`}>
            <Toolbar editor={editor} />
            <EditorContent editor={editor}/>
        </div>
    )
}