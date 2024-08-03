import React, { useEffect } from 'react'
import { Table,Button,pagination} from 'react-bootstrap'
import { useState } from 'react';
const config2 = require('./config2.json');

export default function Pagination() {
  const[paginationitem,setPaginationItem] = useState([]);
  const[student,setStudent] = useState({
  data:[],
  meta: {
    pagination: {
      page: 1, // Initial page
      pageSize: 10,
      pageCount:12
    }
  
}
});
 let Prev = (page) =>{
    if(student.meta.pagination.page !== 1){
      getStudent(student.meta.pagination.page  -=  1);
       }
  }
 let next = (page) =>{
  console.log("pages",page)
if(student.meta.pagination.page !== student.meta.pagination.pageCount){
  getStudent(student.meta.pagination.page  +=  1);
   }
  }
   let gotTopage =(e)=>{
    let page = e.target.innerHTML;
    console.log(e.target.innerHTML)
    getStudent(page)
   }
  
  let getStudent = (page=1)=>{
    console.log(page)
    fetch(`${config2.base_url}/api/stus?pagination[page]=${page}&pagination[pageSize]=10`).then((data)=>{
      return data.json();
    }).then((data)=>{
      // console.log(data);
      setStudent(data);
      console.log("after set",student);
      var start = student.meta.pagination.page;
      var arr = [];
      var i;
      for( i=1;i<=student.meta.pagination.pageCount;i++){
      if(i==start){
            arr.push(<li class="page-item"><a class="page-link" href="#" onClick={(e)=>{gotTopage(e)}}>{i}</a></li>) }
        
      else{
            arr.push(<li class="page-item"><a class="page-link" href="#" onClick={(e)=>{gotTopage(e)}}>{i}</a></li>
      )
      }
    
      }    
        
        setPaginationItem(arr);
        console.log(arr);

     
    }).catch().finally();

  }
 
  return (
  <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Password</th>
              <th>Date</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
           {

            student.data.map(function(currentValue,index,arr){
              // console.log(arr[index].attributes.email);
              return (
                <tr key={index}>
                    <td>{arr[index].id}</td> 
                <td>{arr[index].attributes.email}</td>
                  <td>{arr[index].attributes.password}</td>
                  <td>{arr[index].attributes.createdAt}</td>
                  <Button variant='success' size='lg'>viwe</Button>
                  <Button variant='danger' size='lg'>Delete</Button>                
                </tr>
              )
            })
           }  
             </tbody>
             </Table>
            <nav aria-label="Page navigation example d-flex justify-content-center">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous" onclick={(page)=>{Prev(page)} }>
        <span aria-hidden="true">«</span>
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="" className=" d-flex align-items-center" >{
        // paginationitem.length > 0 &&
        paginationitem.map(function(currentValue,index,arr){
          return currentValue;
        })
        

      }</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next" onclick={(page)=>{next(page)} }>
        <span aria-hidden="true">»</span>
      </a>
    </li>
  </ul>
</nav>
 <button className='btn btn-success' onClick={(e)=>{ getStudent(1) }}>Get Data -></button>
      
        </>
      );
    

    
  
}
