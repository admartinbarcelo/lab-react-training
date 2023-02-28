function Rating({children}) {
    const value = Math.round(children);
    return (
        <p className="card-text">
            {value === 0 && <p>★☆☆☆☆</p>}
            {value === 1 && <p>★☆☆☆☆</p>}
            {value === 2 && <p>★★☆☆☆</p>}
            {value === 3 && <p>★★★☆☆</p>}
            {value === 4 && <p>★★★★☆</p>} 
            {value === 5 && <p>★★★★★</p>}
        </p>
    )
}
export default Rating;