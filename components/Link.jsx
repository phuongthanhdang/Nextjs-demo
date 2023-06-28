import NextLink from 'next/link';
import { useEffect } from 'react';
export function Link({href, children}) {
    return (
        <NextLink href={href}>
            {children}
        </NextLink>
    );
}
