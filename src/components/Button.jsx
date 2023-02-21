import React from 'react'
import { useDispatch } from 'react-redux'
export default function Button(props) {
   let hieuUng = props.hieuUng
    let dispatch = useDispatch();
    let handleClick = function () {
        // tiến hành thay đổi state visible nằm trong store
        if(hieuUng === "Bat Tat"){
            dispatch({type:'toggle'})
        } else if(hieuUng === "Doi Mau"){
            dispatch({type:"chuyenMau"})
        }
        if( hieuUng === "Tang Counter Value"){
            dispatch({type:'tangValue', payload: 10});
        } else if(hieuUng === "Giam Counter Value"){
            dispatch({type:'giamValue', payload: 5});
        }
        if( hieuUng === "reset"){
            dispatch({type:'setLai', payload: 0});
        }

    }
  return (
    <button onClick={handleClick}>{hieuUng}</button>
  )
}
