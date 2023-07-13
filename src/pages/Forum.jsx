import "./Forum.scss"
import { useEffect, useState } from "react";
import axios from 'axios'
import Header1 from "../components/Header1"


function Forum () {

    const [forum, setForum] = useState([]);
    const [topic, setTopic] = useState("");
    const [conversation, setConversation] =useState([]);
    const [comment, setComment] =useState("");
    const [valueNewTopic, setValueNewTopic]=useState("");

    const handleClickTopic = (e) => {
        const newTopic = e.target.innerHTML;
        setTopic(newTopic);
    }

    const handleChangeComment = (e) => {
        setComment(e.target.value)
    }

    const handleChangeNewTopic = (e) => {
        setValueNewTopic(e.target.value)
    }

    const handleClickNewTopic = () => {
        if(valueNewTopic !== ""){ 

            fetch("http://localhost:4242/api/forum", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({topic: valueNewTopic}),
            })
            .then((response) => response.json())
            .catch(error => console.error(error))
            .then(() => // NE PAS OUBLIER CETTE FOUTUE FONCTION FLECHEE !
                fetch(`http://localhost:4242/api/forum`)
                .then((res) => res.json())
                .then((res) => {
                    setForum(res);
                    return res; // res = updatedForum
                })
            )
            setValueNewTopic("");}
    }

    const handleClickSubmitComment = () => {
        
            if(comment !== ""){
            const topicForumElement=forum.find(element => element.topic === topic)
            const newId = topicForumElement.conversation.length + 1;

            const newComment = {
                "id":newId,
                "user":"Anonyme",
                "text": comment
            }


            fetch(`http://localhost:4242/api/forum/${topicForumElement.id}/conversation`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newComment),
            })
            .then((response) => response.json())
            .catch(error => console.error(error))
            .then(() => // NE PAS OUBLIER CETTE FOUTUE FONCTION FLECHEE !
                fetch(`http://localhost:4242/api/forum`)
                .then((res) => res.json())
                .then((res) => {
                    setForum(res);
                    return res; // res = updatedForum
                })
            )
            .then((updatedForum) => {
                const newConversation = updatedForum.find(element => element.topic === topic).conversation;
                setConversation(newConversation);
            })
        
            setComment("");
            }
    }


    useEffect(()=>{
        axios.get(`http://localhost:4242/api/forum`)
        .then((res) => {
         setForum(res.data);
        })
    },[])

    useEffect(()=>{
        if(topic!==""){

            const newTopic =topic;
            const newConversation = forum.find(element => element.topic === newTopic).conversation;
            setConversation(newConversation);
        }
    }, [topic])

    

    return (
    <>
        <Header1/>
        <main className="Forum-main">
            <section className="Forum-topics">
                <div>
                    <p>Liste des sujets de discussion</p>
                </div>
                {forum.map(element => (
                    <button type="button" key={element.id} onClick={handleClickTopic}>
                        {element.topic}
                    </button>
                ))}
                <div className="divNewTopic" >
                    <input type="text" placeholder="Sujet pour création d'un nouveau topic" onChange={handleChangeNewTopic} value={valueNewTopic} />
                    <button type="button" onClick={handleClickNewTopic}>Ajouter un topic</button>
                </div>
            </section>
            <div className="Parchem">
            <section className="Forum-conversation" >
                {conversation !== [] ?
                <>
                    {conversation.map(element => (
                        <div key={element.id}>
                            <p><span>{element.user}</span></p>
                            <p>{element.text}</p>
                        </div>
                    ))}
                <div className="divNewComment">
                    <textarea className="textareaForum" placeholder="Saisissez votre commentaire" value={comment} onChange={handleChangeComment}></textarea>
                    <button type="button" onClick={handleClickSubmitComment}>Envoyer</button>
                </div>
                </>
                    :
                    <p>Choisissez un sujet de discussion</p>
                }
            </section>
            </div>
        </main>
    </>
    )
}

export default Forum;