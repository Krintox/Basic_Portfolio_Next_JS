import Head from 'next/head'
import ArticleList from '../components/ArticleList'


export default function Home() {
  return (
    <div><section class="landing-section" id="landing-section">
    <div class="intro-div">
        <p class="welcome-para">Welcome to my website</p>
        <p class="webdev-para">I'm a <span>Web</span> Devel<span>op</span>er</p>

        <div class="hire-btn-div">
            <button class="hire-btn">Hire Me</button>
        </div>

    </div>
</section>
    </div>
  )
}
