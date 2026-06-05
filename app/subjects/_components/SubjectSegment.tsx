'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const SubjectSegment = ({title, icon, notes}:{title:string, icon:string, notes:string[]}) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="relative bg-zinc-900 md:w-[40vw] not-md:w-[80vw] rounded p-5 border border-zinc-700">
            <div className="flex flex-row rounded z-20 relative justify-between">
                <div className="flex flex-row gap-2 overflow-hidden">
                    <button className={`select-none drag-none hover:cursor-pointer ${ open ? 'rotate-0' : 'rotate-90' } duration-300`} onClick={() => setOpen(!open)}>&gt;</button>
                    <h3 className="text-xl wrap-break-word">{title}</h3>
                </div>
                <img className="h-fit select-none drag-none pointer-none" src={icon} width={25}/>
            </div>
            <AnimatePresence initial={false}>
                { open &&
                    <motion.div
                        initial={{height:0}}
                        exit={{height:0}}
                        animate={{height:"auto"}}
                        transition={{duration:0.2}}
                        key="dropdown"
                        className="relative w-full z-10 top-full overflow-hidden"
                    >
                        <div className="flex border-l flex-col overflow-hidden ps-4 mt-4">
                            {notes.map((note) => (
                                <p className="my-1 wrap-break-word" key={note}>{note}</p>
                            ))}
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
  )
}

export default SubjectSegment