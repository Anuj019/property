import '@/assets/styles/globals.css'

 export const metadata = {
    title: 'property listings',
    keywords: "rentals, listing, property in korba", 
    description: "find"
 }
const MainLayout = ({children}) => {
    return ( <html>
        <body>
            <main >
                {children}
            </main>
        </body>
    </html> );
}
 
export default MainLayout ;