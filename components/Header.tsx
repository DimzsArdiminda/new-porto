import { linkContent } from '@/lib/Header';
import Link from 'next/link';
import { title } from 'process';
import React from 'react'

export default function Header() {
    return (
        <header>
        <div className="logo">&lt;/ARDIMINDA&gt;</div>
        <nav>
            <ul>
            {linkContent.map((link, index) => (
                <Link key={index} href={link.href}>
                <li>{link.title}</li>
                </Link>
                ))}
            </ul>
        </nav>
        </header>
    );
}
