import React from "react";
import PageLayout from "../../components/page-layout/";
import style from "./index.module.styl";
import GithubSvg from "./github.svg";

export default () => (
  <PageLayout title="About">
    <h1>About Sporadic Labs</h1>
    <p>
      Mike and Rex were mild mannered researchers, working hard to solve the problems of the world
      using the power of SCIENCE!
    </p>
    <p>
      Soon, they grew disillusioned with the limitations of society, and decided to take things into
      their own hands through more nefarious means.
    </p>
    <p>In a freak lab accident, the pair gained inhuman powers and vowed to take over the world.</p>
    <p>Oh and in their free time, they make games. You can play some here!</p>
    <div className={style.authors}>
      <div className={style.authorCard}>
        <h3>Mike Hadley</h3>
        <a
          className={style.authorLinks}
          href="https://www.mikewesthad.com/"
          target="_blank"
          alt="Mike's website!"
        >
          Website
        </a>
        <a
          className={style.authorLinks}
          href="https://github.com/mikewesthad"
          target="_blank"
          alt="Mike's Github!"
        >
          <img className={style.githubLogo} src={GithubSvg} alt="Github Logo" />
        </a>
      </div>
      <div className={style.authorCard}>
        <h3>Rex Twedt</h3>
        <a
          className={style.authorLinks}
          href="https://rextwedt.com/"
          target="_blank"
          alt="Rex's website!"
        >
          Website
        </a>
        <a
          className={style.authorLinks}
          href="https://github.com/retwedt"
          target="_blank"
          alt="Rex's Github!"
        >
          <img className={style.githubLogo} src={GithubSvg} alt="Github Logo" />
        </a>
      </div>
    </div>
  </PageLayout>
);
