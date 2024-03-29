import React,{useState,useRef,useEffect} from 'react';
import './CreatePost.css';

const CreatePost=(props)=>{
    const maxLength=420;
    const [rant,setRant]=useState('');
    const textAreaRef=useRef(null);
    const sendRant = async ()=>{
        if(rant.length&&rant.length<=maxLength)
        {
            const res=await fetch('https://shitidontsayirl.herokuapp.com/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                rant:rant,
            })
        });
        if(res.ok){
            setRant('');
            props.setRerender(Math.random())
        }
        else
            alert('Some Error occured ;-;');
        }
    }
    useEffect(()=>{
        const ref=textAreaRef.current;
        const addTab=(e)=>{
        if(e.key==='Tab'&&rant.length<420)
            {
                e.preventDefault();
                let start=ref.selectionStart;
                let end=ref.selectionEnd;
                setRant(rant.substring(0,start)+'\t'+rant.substring(end));
                ref.selectionStart=ref.selectionEnd=start+1;
            }
        }
        ref.addEventListener('keydown',addTab);
        return ()=>{
            ref.removeEventListener('keydown',addTab);
        }
    })
    return(
        <div className='createContainer'>
            <div>
            <textarea ref={textAreaRef} spellCheck='false' name="rant" id="rant" cols="50" rows="10" maxLength={maxLength} placeholder='Speak your mind :D ' value={rant} onChange={(e)=>setRant(e.target.value)}></textarea>
            <div id='wordCNT'>{rant.length}/{maxLength} characters used</div>
            </div>
            <div id='postBtn' onClick={sendRant}>Post</div>
        </div>
    )
}

export default CreatePost;