function Nav({ scps, onScpSelect }) {
    return (
        <nav>
            <h2>Files</h2>
            <ul>
                {scps.map((scp) => (
                    <li key={scp.id} onClick={() => onScpSelect(scp)}>
                        {scp.id} - {scp.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
 
export default Nav;