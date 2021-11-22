const staticPage = ({time}) => {
    return <div>{time}</div>;
};

export default getStaticProps = async() => {
    return {props: {time: new Date().toISOString()}};
};

export default staticPage;