import Head from 'next/head'
// import '../styles/globals.css'

export const metadata = {
    title: 'Travel',
    description: 'demo nextjs'
}
export function RootLayout(){
    return (  
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="icon" href="./logo.webp" />
            <title>{metadata.title}</title>
        </Head>
    )
}