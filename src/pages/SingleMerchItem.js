import { useEffect, useState } from "react";

export default function SingleMerchItem(props){
    const [merch, setMerch] = useState({});
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
            .then((res) => res.json())

            .then((data) => setMerch(data))
            .catch((err)=> {
                console.error("get merch error: ", err);
            });
    },[props.match.params.id]);

    return (
        <div>
            <h1> Merchandise</h1>
            <div>
                <h3>
                    Item: {merch.title} Available: {merch.rating?.count}
                </h3>
                <p>{merch.description}</p>
                <img src={merch.image} alt=""/>
            </div>
        </div>
    );
}