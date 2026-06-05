// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link'
// import Image from 'next/image';
// import { links } from '@/app/_config/navigation';
// import { AnimatePresence, motion } from 'motion/react';
// import { usePathname } from 'next/navigation';

// const Header = () => {
//   const [menu, setMenu] = useState(false);
//   const pathName = usePathname()

//   useEffect(() => {
//     const resize = () => {
//         if (window.innerWidth >= 1024 && menu) {
//             setMenu(false);
//         }
//     }
//     window.addEventListener('resize', resize);
//     return () => window.removeEventListener('resize', resize);
//   },[menu])

//   return (
//     <>
//         <header className="w-full fixed bg-background z-50 top-0">
//             <div className="flex flex-row justify-between p-4">
//                 <div className="flex flex-row items-center">
//                     <div className="flex items-center gap-1">
//                         <Image src="/assets/logo.png" alt="r/igcse" width={22} height={22}/>
//                         <h1 className="font-semibold pr-12 text-xl">r/IGCSE</h1>
//                     </div>
//                     <nav className="hidden lg:block items-center">
//                         <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
//                             {links.map((link) => (
//                                 <Link key={link.name} href={link.href} className={`${pathName === link.href && "underline font-semibold"} hover:text-primary-500 transition-colors duration-150`} {...(link.newTab && { target:"_blank", rel:"noopener noreferrer" })}>
//                                     {link.name}
//                                 </Link>
//                             ))}
//                         </div>
//                     </nav>
//                 </div>
//                 <button className="text-lg hover:cursor-pointer hover:text-primary-500 transition-colors duration-150 lg:hidden" onClick={() => setMenu(!menu)}>☰</button>    
//             </div> 
//         </header>
//         {/* <header className="w-full fixed bg-background z-50 top-0">
//             <div className="flex flex-row justify-between items-center p-4">
//                 <div className="flex items-center gap-1">
//                     <Image src="/assets/logo.png" alt="r/igcse" width={16} height={16}/>
//                     <h1 className="font-semibold pr-12 text-md">r/IGCSE</h1>
//                 </div>
//                 <nav className="hidden lg:block">
//                     <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
//                         {links.map((link) => (
//                             <Link key={link.name} href={link.href} className={`${pathName === link.href && "underline font-semibold"} hover:text-primary-500 transition-colors duration-150 text-sm`} {...(link.newTab && { target:"_blank", rel:"noopener noreferrer" })}>
//                                 {link.name}
//                             </Link>
//                         ))}
//                     </div>
//                 </nav>
//                 <div className="hidden lg:block px-20"></div>
//                 <button className="text-lg hover:cursor-pointer hover:text-primary-500 transition-colors duration-150 lg:hidden" onClick={() => setMenu(!menu)}>☰</button>    
//             </div> 
//         </header> */}
//         <AnimatePresence>
//             {
//                 menu && (
//                     <>
//                         <motion.div 
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.2 }} 
//                             className="fixed inset-0 z-30 bg-black/50 lg:hidden"
//                             onClick={() => setMenu(false)}
//                         >
//                         </motion.div>
//                         <motion.nav 
//                             initial={{y:'-100%', opacity:0}}
//                             animate={{y:0, opacity:1}}
//                             exit={{y:'-100%', opacity:0}}
//                             transition={{duration:0.2}}
//                             className="top-2 p-4 fixed bg-background w-full z-40"
//                         >
//                             <div className="flex flex-col justify-center items-start">
//                                 {links.map((link) => (
//                                     <Link key={link.name} href={link.href} className={`${pathName === link.href && "underline font-semibold"} my-2 hover:text-primary-500 transition-colors duration-150`} {...(link.newTab === true && { target:"_blank", rel:"noopener noreferrer" })}>
//                                         {link.name}
//                                     </Link>
//                                 ))}
//                             </div>
//                         </motion.nav>
//                     </>
//                 )
//             }
//         </AnimatePresence>
//     </>
//   )
// }

// export default Header