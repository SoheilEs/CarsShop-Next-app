const Footer = () => {
    return(
        <footer>
            <p>SMMITCAR &copy; {new Date().getFullYear()}</p>
            <style jsx>{`
                footer {
                    width:100%;
                    background-color: silver;
                    text-align:center;
                    margin-top:50px;
                    }
                p {
                    padding: 10px;
                }

            `}</style>
        </footer>
    );
}
export default Footer