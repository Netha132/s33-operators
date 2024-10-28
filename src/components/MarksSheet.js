import React, { useRef } from 'react'

function MarksSheet() {
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let telInputRef=useRef();
    let hinInputRef=useRef();
    let engInputRef=useRef();
    let matInputRef=useRef();
    let sciInputRef=useRef();
    let socInputRef=useRef();


    let telSpanRef=useRef();
    let hinSpanRef=useRef();
    let engSpanRef=useRef();
    let matSpanRef=useRef();
    let sciSpanRef=useRef();
    let socSpanRef=useRef();


    let resultPara=useRef();
  return (
    <div>
        <fieldset>
        <h1>Students MarksSheet</h1>

        <div>
      <form>
       <fieldset>
        <legend>Student Details</legend>
        <div>
        <label>First Name</label>
        <input ref={firstNameInputRef} placeholder='Enter First Name'></input>
        <span></span>
        </div>
        <div>
            <label>Last Name</label>
            <input ref={lastNameInputRef} placeholder='Enter Last Name'></input>
            <span></span>
        </div>
        </fieldset>

        <fieldset>
            <legend>Subjects</legend>
        <div>
            <label>Telugu</label>
            <input type='number' ref={telInputRef} onFocus={
                ()=>{
                    telInputRef.current.style.backgroundColor="#b68aeffa";
                }
            }
            onChange={()=>{
                let telMarks=Number(telInputRef.current.value);
                // telSpanRef.current.innerHTML=telMarks>=35?"Pass":"Fail";
                // telSpanRef.current.style.color=telMarks>=35?"#2C5F2D":"#C5001A";

                if(telMarks>=35){
                    telSpanRef.current.innerHTML="Pass";
                    telSpanRef.current.style.color="#2C5F2D";
                }else{
                    telSpanRef.current.innerHTML="Fail";
                    telSpanRef.current.style.color="#C5001A";
                }
            }}
            onBlur={()=>{
                telInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={telSpanRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input type='number' ref={hinInputRef} onFocus={()=>{
                hinInputRef.current.style.backgroundColor="#b68aeffa";
            }}
            onChange={()=>{
                let hinMarks=Number(hinInputRef.current.value);
                // hinSpanRef.current.innerHTML=hinMarks>=35?"Pass":"Fail";
                // hinSpanRef.current.style.color=hinMarks>=35?"#2C5F2D":"#C5001A";
                if(hinMarks>=35){
                    hinSpanRef.current.innerHTML="Pass";
                    hinSpanRef.current.style.color="#2C5F2D"
                }else{
                    hinSpanRef.current.innerHTML="Fail";
                    hinSpanRef.current.style.color="#C5001A"
                }

            }}
            onBlur={()=>{
                hinInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={hinSpanRef}></span>
        </div>
        <div>
            <label>English</label>
            <input type='number' ref={engInputRef}
            onFocus={()=>{
                engInputRef.current.style.backgroundColor="#b68aeffa";
            }}
            onChange={()=>{
                let engMarks=Number(engInputRef.current.value);
                // engSpanRef.current.innerHTML=engMarks>=35?"Pass":"Fail";
                // engSpanRef.current.style.color=engMarks>=35?"#2C5F2D":"#C5001A";
                if(engMarks>=35){
                    engSpanRef.current.innerHTML="Pass";
                    engSpanRef.current.style.color="#2C5F2D"
                }
                else{
                    engSpanRef.current.innerHTML="Fail"
                    engSpanRef.current.style.color="#C5001A"
                }
            }}
            onBlur={()=>{
                engInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={engSpanRef}></span>
        </div>
        <div>
            <label>Maths</label>
            <input type='number' ref={matInputRef}
            onFocus={()=>{
                matInputRef.current.style.backgroundColor="#b68aeffa";
            }}
            onChange={()=>{
                let matMarks=Number(matInputRef.current.value);
                // matSpanRef.current.innerHTML=matMarks>=35?"Pass":"Fail";
                // matSpanRef.current.style.color=matMarks>=35?"#2C5F2D":"#C5001A";
                if(matMarks>=35){
                    matSpanRef.current.innerHTML="Pass";
                    matSpanRef.current.style.color="#2C5F2D";
                }
                else{
                    matSpanRef.current.innerHTML="Fail";
                    matSpanRef.current.style.color="#C5001A";
                }
            }}
            onBlur={()=>{
                matInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={matSpanRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input type='number' ref={sciInputRef}
            onFocus={()=>{
                sciInputRef.current.style.backgroundColor="#b68aeffa";
            }}
            onChange={()=>{
                let sciMarks=Number(sciInputRef.current.value);
                // sciSpanRef.current.innerHTML=sciMarks>=35?"Pass":"Fail";
                // sciSpanRef.current.style.color=sciMarks>=35?"#2C5F2D":"#C5001A";
                if(sciMarks>=35){
                    sciSpanRef.current.innerHTML="Pass";
                    sciSpanRef.current.style.color="#2C5F2D";
                }
                else{
                    sciSpanRef.current.innerHTML="Fail";
                    sciSpanRef.current.style.color="#C5001A";
                }
            }}
            onBlur={()=>{
                sciInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={sciSpanRef}></span>
        </div>
        <div>
            <label>Social</label>
            <input type='number' ref={socInputRef}
            onFocus={()=>{
                socInputRef.current.style.backgroundColor="#b68aeffa";
            }}
            onChange={()=>{
                let socMarks=Number(socInputRef.current.value);
                // socSpanRef.current.innerHTML=socMarks>=35?"Pass":"Fail";
                // socSpanRef.current.style.color=socMarks>=35?"#2C5F2D":"#C5001A";
                if(socMarks>=35){
                    socSpanRef.current.innerHTML="Pass";
                    socSpanRef.current.style.color="#2C5F2D"
                }
                else{
                    socSpanRef.current.innerHTML="Fail";
                    socSpanRef.current.style.color="#C5001A";
                }
            }}
            onBlur={()=>{
                socInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={socSpanRef}></span>
        </div>
        </fieldset>
        <div>
            <button type='button' className='animated-button' onClick={()=>{
                let firstName=firstNameInputRef.current.value;
                let lastName=lastNameInputRef.current.value;
                let telMarks=Number(telInputRef.current.value);
                let hinMarks=Number(hinInputRef.current.value);
                let engMarks=Number(engInputRef.current.value);
                let matMarks=Number(matInputRef.current.value);
                let sciMarks=Number(sciInputRef.current.value);
                let socMarks=Number(socInputRef.current.value);

                let totalMarks=telMarks+hinMarks+engMarks+matMarks+sciMarks+socMarks;

                let totalParc=(totalMarks/600)*100;

                alert(`${firstName} ${lastName} has scored ${totalMarks} percentage of ${totalParc.toFixed(2)}%`);

                resultPara.current.innerHTML=
                `${firstName} ${lastName} has scored ${totalMarks} percentage of ${totalParc.toFixed(2)}%`;

            }}>Get Result</button>
        </div>
        <p ref={resultPara}></p>
      </form>
      </div>
      </fieldset>
    </div>
  )
}

export default MarksSheet
