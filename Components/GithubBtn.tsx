import Link from "next/link";
import styles from '../styles/githubBtn.module.css'

const GithubBtn = ({href=""}) =>
{   
    return (
        <Link href={href} className={styles.Github}>
            <img src="/Images/Cards/github.svg" alt="The github logo"/>
            <h1>Lien code source</h1>
        </Link>
    );
};
export default GithubBtn;