import Link from "next/link";

function Home() {
    return (<div>
        <h1>A história do Voo Livre.</h1>
        <Link href="/sobre">
            <a>Sobre o blog</a>
        </Link>
    </div>)

}

export default Home;