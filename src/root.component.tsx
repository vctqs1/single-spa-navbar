export default function Root(props) {
    console.log("Navbar", props.name);
    return <section>{props.name} is mounted!</section>;
}
