
export default function About() {
    return(
        <div className="about-page-container">
            <div className="title">
            <h1>About</h1>
            </div>
            <div className="text-container">
                <div className="app-summary wrapper">
                    <h2>App Description</h2>

                    <figure>
                        <blockquote>
                            <p>
                            <b>Home Page-</b> home page provides an image for aesthetics and 3 buttons on the right side of the page for navigation. This buttons  will take you to the products page the contact page and the about page.<br/>
                            <br/>
                            <b>Products Page-</b> Products page shows all available products offered as well as filters to allow user to specify which group of products they want to view. The categories include: Jewelry, Electronics, Men’s clothing, Women’s clothing<br/>
                            <br/>
                            <b>Contact Page-</b> Contact page has the navbar and footer with a letter from the founder on the left side of the page and a form for a user to send their contact information along with a summery so that service reps can contact that user.<br/>
                            <br/>
                            <b>Navbar-</b> The navigation bar features a section at the top of each page with a link to the cart at the top right corner and a company logo on the top left corner. It also provides navigation to all pages on this web application.<br/>
                            <br/>
                            <b>Footer-</b> The footer provides links to the about page the contact page and the cart. The footer is on display at the bottom of every page for convenience.<br/>
                            </p>
                        </blockquote>
                    </figure>
                </div>

                <div className="developer-learned-summary">
                    <h2>What I have learned</h2>

                    <figure>
                        <blockquote>
                        <p>
                        I have learned that its ok to not get something the first time you’re taught about it. I used to get so discouraged if a certain skill didn’t come to me naturally. So much so that I began looking for different career options the moment the learning challenge made itself manifest.<br/>
                        <br/>
                        Programming, like most worthwhile skills, takes grit and determination to learn. I knew I could knuckle down and get things done. But I now know that embracing the grind in learning is ok and that just because programming didn’t come naturally to me it didn’t mean it the opportunity wasn’t for me. I’m more at peace with the struggle and embrace the grind because I know that it is a necessary component and it will be worth it.<br/>
                        <br/>
                        </p>
                        </blockquote>
                    </figure>
                </div>

                <div className="favorite-language-text wrapper">
                    <h2>My Favorite Language</h2>

                    <figure>
                        <blockquote>
                            <p>
                            My favorite language now is javascript. Particularly with the React library in Javascript. I feel like it takes away the aspects of JavaScript that make it hard. So I enjoy the thinking in React along with the infinite logical abilities that JavaScript offers. When I finally understood how React worked I realized that it is very close to how I compartmentalize logic and tools. 
                            </p>
                        </blockquote>
                    </figure>
                </div>
            </div>
        </div>
    )
}