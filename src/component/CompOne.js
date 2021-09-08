import React, {useState, useEffect, Fragment} from "react";
import "./myCss.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import imgLogo from "./img10.png";

import {BiCommentDetail} from "react-icons/bi";
import {BsFillBookmarkFill} from "react-icons/bs";
import {Button, Input} from "antd";
import {AiFillDelete, AiOutlineDelete, AiOutlineLoading3Quaters,} from "react-icons/ai";
import ContentLoader, {Facebook, Instagram} from "react-content-loader";
import {BsBookmark} from "react-icons/bs";
import moment from "moment";



const CompOne = ()=> {

    const [text, setText] = useState(" ");
    const [showImage, setShowImage] = useState(imgLogo);
    const [myData, setMyData] = useState([
            {id:1, 
            title: "I love simple codes",
            icon: "NO",
            time: "3sec ago",
            image: img1,
           },
           {id: 2,
            title: "I love soft Codes",
            icon: "JS",
            time: "6sec ago",
            image: img2,
           },
           {id: 3,
            title: "I love my job",
            icon: "RC",
            time: "90sec ago",
            image: img3,
           },
           {id: 4,
            title: "I love hard codes",
            icon: "MN",
            time: "65sec ago",
            image: img4,
           },
           {id:5, 
           title: "I love simple codes",
           icon: "NO",
           time: "3sec ago",
           image: img1,
           },
           {id: 6,
           title: "I love soft Codes",
           icon: "JS",
           time: "6sec ago",
           image: img2,
           },
           {id: 7,
           title: "I love my job",
           icon: "RC",
           time: "90sec ago",
           image: img3,
           },
           {id: 8,
           title: "I love hard codes",
           icon: "MN",
           time: "65sec ago",
           image: img4,
           },
    ]);

    const uploadImage = (e)=> {
        const file = e.target.files[0];
        const res = URL.createObjectURL(file);
        setShowImage(res);
    };

    const deleteItem = (id)=> {
        const removeItem = myData.filter((el)=> el.id !== id);
        setMyData(removeItem);
    };

    const addItem = ()=> {
        const items = {
            title: text,
            id: myData.length + 1,
            icon: text.charAt(0),
            image: showImage,
            time: Date.now(),
        };
        setMyData([...myData, items]);
        setText(" ");
    };

    useEffect( ()=> {
        const saveItems = JSON.parse(localStorage.getItem("store"));
        setMyData(saveItems)
    }, [])

    useEffect( ()=> {
        localStorage.setItem("store", JSON.stringify(myData));
    }, [myData]);
    return(
        
        <>
        <div className ="inputContainer">
            <div className ="inputLayOut">
                <div className= "input24">
                    <Input className="input" type="file" onChange={uploadImage}/>
                    <Input
                        className= "input"
                        placeholder= "Enter the title"
                        value = {text}
                        onChange= { (e)=> {
                            setText(e.target.value);
                        }}/>
                    
                    <Button className= "inputButton" 
                        type="primary" 
                        danger
                        onClick={ ()=> {
                            console.log(text);
                            addItem();
                        }}>Add</Button>
                </div>
                <div className= "inputImage">
                    <img
                        src={showImage}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "5px",
                            objectFit: "cover",
                        }}/>
                </div>
            </div>
        </div>
        
        {
            !myData && (
                <div className= "mainContainer">
                    <Instagram
                    speed={2}
                    foregroundColor= "gray"
                    backgroundColor= "lightgray"
                    viewBox= "10 10 200 200"
                    height= {250}
                    width= {250}/>

                    <Instagram
                    speed={2}
                    foregroundColor= "gray"
                    backgroundColor= "lightgray"
                    viewBox= "10 10 200 200"
                    height= {250}
                    width= {250}/>

                    <Instagram
                    speed={2}
                    foregroundColor= "gray"
                    backgroundColor= "lightgray"
                    viewBox= "10 10 200 200"
                    height= {250}
                    width= {250}/>
                </div>
            )
        }

        <div className= "mainContainer">

         {myData && 
            myData.map( (props)=> (
                <div className= "container" key={props.id}>
                    <div className="containerHolder">
                        <div className="containerIcon">{props.icon}</div>
                        <div className="containerIcon">
                            <AiOutlineDelete
                            onClick={ ()=> {
                                console.log("I can be deleted of ID: ", props.id);
                                deleteItem(props.id);
                            }}/>
                        </div>
                    </div>
                    

                    <div className="containerTitle">{props.title}</div>
                    <div className="containerTime">
                        {moment(props.time).fromNow()}
                    </div>
                    <div className="containerImage">
                        <img className="containerImage1" src={props.image}/>
                    </div>
                    <div className= "containerIcons">
                        <BiCommentDetail/>
                        <BsFillBookmarkFill/>
                    </div>
                </div>
            ))}
        </div>

        </>
    );
}

export default CompOne