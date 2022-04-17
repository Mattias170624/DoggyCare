import { useEffect, useState } from "react";
import "../CompStyles/dogList.css"

const DogList = () => {
    let [dogData, setDogData] = useState([])

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        const res = await fetch("https://api.jsonbin.io/b/625a9f27bc312b30ebe81991");
        const data = await res.json();
        try {
            setDogData(data)
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div id="dogList">
            <section id="dogListImage">
                <div id="dogListText">
                    <h1>Our List</h1>
                    <p>We currently have 78 dogs<br />
                        in our listing. You can find more details<br />
                        on each dog by clicking on their image.
                    </p>
                </div>
            </section>

            <section id="dogListContainer">
                <h2>Our Current Dogs</h2>

                <div id="dogListData">
                    <ul id="dogUl">
                        {dogData &&
                            dogData.map((dog, index) => (
                                <li key={index}>
                                    <section className="dogImageBox">
                                        <img src={dog.img} />
                                        <h1>{dog.name}</h1>
                                        <p>
                                            Breed: {dog.breed}<br />
                                            Sex: {dog.sex}<br />
                                            Age: {dog.age}<br />
                                        </p>
                                        <br />
                                        <p>
                                            Owner: {dog.owner.name} {dog.owner.lastName} <br />
                                            Number: {dog.owner.phoneNumber}<br />
                                        </p>
                                    </section>
                                </li>
                            ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default DogList;