import {FaGithub, FaTwitter, FaLinkedin, FaStackOverflow} from 'react-icons/fa';
import smoothscroll from 'smoothscroll-polyfill';

if (process.browser) {
  smoothscroll.polyfill();
}

export default function HomePage ({code}) {
  return <main className="container">
    <header>
      <div className="cols">
        <h1>
{`=============
Jonathan
Sanchez Pando
=============`}
        </h1>

        <div>
          <img src="images/jsan-face.jpg" className="profile-picture" />
          <div className="social">
            <a href="https://github.com/j-san/">
              <FaGithub alt="See Jonathan Sanchez Pando's profile on GitHub" />
            </a>
            <a href="https://twitter.com/j_sanp">
              <FaTwitter alt="Follow Jonathan Sanchez Pando on Twitter on GitHub" />
            </a>
            <a href="http://be.linkedin.com/in/sanchezjonathan">
              <FaLinkedin alt="See Jonathan Sanchez Pando's profile on LinkedIn" />
            </a>
            <a href="https://stackoverflow.com/users/2551769/jsan">
              <FaStackOverflow alt="See Jonathan Sanchez Pando's profile on StackOverflow" />
            </a>
          </div>
        </div>
      </div>
      <div className="baseline comment">Web Alchemist</div>
      <div className="tech-gravity" onClick={()=> {
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
      }}>
        <span><img src="images/tech-gravity/react.svg" /></span>
        <span><img src="images/tech-gravity/python.svg" /></span>
        <span><img src="images/tech-gravity/django.svg" /></span>
        <span><img src="images/tech-gravity/docker.svg" /></span>
        <span><img src="images/tech-gravity/nodejs.svg" /></span>
        <span><img src="images/tech-gravity/js.svg" /></span>
      </div>
    </header>

    <h2>Freelance Expert Full Stack Web Developer</h2>
    <p>I'm a Web Alchemist pushing the boundaries of <strong>product design, testing and deployment</strong> with the Golden ratio transforming them into <strong>innovations and great user experience.</strong></p>

    <h2>Guidelines</h2>
    <ul>
      <li><cite>To solve a problem, first simplify.</cite> (every math book)</li>
      <li><cite>Do it right before you do it fast.</cite></li>
      <li><cite>Don't try to do fast, do it smooth, smooth is fast.</cite></li>
      <li><cite>Simple can be harder than complex.</cite> (Steve Jobs)</li>
      <li><cite>Simple is better than complex.</cite> (The Zen of Python, by Tim Peters <code>python -m this</code>)</li>
      <li><cite>Knowledge makes everything simpler.</cite> (<a href="http://lawsofsimplicity.com/2006/07/23/law-4-learn">Laws of Simplicity</a>, John Maeda)</li>
    </ul>

    <h2>Skills</h2>

    <div className="cols cols-2">
      <div>
        <h3>Programming Languages</h3>
        <ul>
          <li><strong>JavaScript</strong></li>
          <li><strong>Python</strong></li>
          <li>Elixir</li>
          <li>Go</li>
        </ul>
      </div>

      <div>
        <h3>Platforms &amp; Frameworks</h3>
        <ul>
          <li><strong>React</strong></li>
          <li><strong>Django</strong></li>
          <li><strong>Docker</strong></li>
          <li>Node.js</li>
          <li>Jamstack</li>
          <li>Testing: Jest / Cypress / Mocha / Chai</li>
        </ul>
      </div>

      <div>
        <h3>Systems &amp; Tools</h3>
        <ul>
          <li><strong>Web</strong> & mobile applications</li>
          <li><strong>Linux</strong> / MacOS</li>
          <li>Git / npm / Pip / Make</li>
          <li>PostgreSQL / Postgis / MongoDB / MySQL</li>
        </ul>
      </div>

      <div>
        <h3>Methodologies &amp; Skills</h3>
        <ul>
          <li>UX/UI</li>
          <li>Agile Method, <strong>Scrum</strong> master certified</li>
          <li>Structured Testing</li>
          <li>Continuous Integration / Delivery / Deployment</li>
        </ul>
      </div>
    </div>
    <div className="background">
      <aside>
        <pre>
          <code>
            {code}
          </code>
        </pre>
      </aside>
      <aside>
        <pre>
          <code>
            {code}
          </code>
        </pre>
      </aside>
    </div>
  </main>;
}

export async function getStaticProps({}) {
  const res = await fetch('https://raw.githubusercontent.com/douglascrockford/JSON-js/master/json2.js');
  const DCJson = await res.text();

  return {
    props: {
        code: DCJson
    },
  }
}
