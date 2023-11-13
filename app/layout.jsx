import '@styles/globals.css';

export const metadata = { 
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts'
};


const RootLayout = () => {
  return (
    <html lang="en">
        <body>
            <div className='name'>
                <div className='gradient'></div>
            </div>

            <main className='app'>
                {children}
            </main>
        </body>

    </html>
  )
}

export default RootLayout;