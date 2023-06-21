import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { FiBook } from 'react-icons/fi';
import { Header, IRT } from '../components';

import { GridComponent, ColumnDirective, ColumnsDirective, Page, Filter, Group, Inject, Sort } from '@syncfusion/ej2-react-grids';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { chapterData,studentData,moduleData } from '../data/dummy';


const Instructors = () => {
  const [students, setStudents] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/student_book_data');
        const data = response.data;
        const students = Array.from(new Set(data.map(item => item.STUDENT)));
        console.log(data)
        setStudents(students);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  
  function handleSelect(books) {
    const filteredStudents = data.filter(item => item.BOOK === books);

    const stuff = filteredStudents.map(item => item.STUDENT);
    setStudents(stuff);
  }
  const customHeader = () => {
    return (
      <span className='e-headertext'>Students</span>
    );
  }
  const customHeader1 = () => {
    return (
      <span className='e-headertext'>Chapters</span>
    );
  }
  const customHeader2 = () => {
    return (
      <span className='e-headertext'>Modules</span>
    );
  }

  function handleSelect1(e) {
    console.log("Selected item:", e.text);
  }


  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-[#F6F6F6] rounded-3xl'>
      <Header category="Page" title="Home" />

      <div className='m-5 text-[40px] text-[#066579] font-bold'>Your Books</div>
      <div>
        <ScrollingCarousel show={3.5} slide={3} swiping={true} >
          <button className='text-[25px] bg-white m-6 p-3 h-[100px] w-[300px] hover:drop-shadow-xl rounded-3xl font-bold' onClick={() => handleSelect('Introduction to Programming')}><FiBook className='inline mr-' />Introduction to Programming</button>
          <button className='text-[25px] bg-white m-6 p-3 h-[100px] w-[300px] hover:drop-shadow-xl rounded-3xl font-bold' onClick={() => handleSelect('Database Systems')}>Database Systems</button>
          <button className='text-[25px] bg-white m-6 p-3 h-[100px] w-[300px] hover:drop-shadow-xl rounded-3xl font-bold' onClick={() => handleSelect('Computer Networks')}>Computer Networks</button>
          <button className='text-[25px] bg-white m-6 p-3 h-[100px] w-[300px] hover:drop-shadow-xl rounded-3xl font-bold' onClick={() => handleSelect('Web Development')}>Web Development</button>
          <button className='text-[25px] bg-white m-6 p-3 h-[100px] w-[300px] hover:drop-shadow-xl rounded-3xl font-bold' onClick={() => handleSelect('Operating Systems')}>Operating Systems</button>
          <button className='text-[25px] bg-white m-6 p-3 h-[100px] w-[300px] hover:drop-shadow-xl rounded-3xl font-bold' onClick={() => handleSelect('Data Structures and Algorithms')}>Data Structures and Algorithms</button>
          <button className='text-[25px] bg-white m-6 p-3 h-[100px] w-[300px] hover:drop-shadow-xl rounded-3xl font-bold' onClick={() => handleSelect('Computer Graphics')}>Computer Graphics</button>
          <button className='text-[25px] bg-white m-6 p-3 h-[100px] w-[300px] hover:drop-shadow-xl rounded-3xl font-bold' onClick={() => handleSelect('Software Engineering')}>Software Engineering</button>
        </ScrollingCarousel>
      </div>

      <div className='m-5 text-[40px] text-[#066579] font-bold'>Student Preformance</div>

      <div>
        {/* <IRT/> */}
      </div>
      <div className='flex flex-wrap'>
        <ListViewComponent id="StudentList" dataSource={students} fields={{ id: 'id', text: 'name' }} width={300} height={500}
          showHeader={true} headerTemplate={customHeader} select={handleSelect1} style={{ marginRight: "25px", marginLeft: "200px" }}
        >
        </ListViewComponent>

        {/* <ListViewComponent id="ChapterList" dataSource={data} fields={{ id: 'id', text: 'chapter' }} width={300} height={500}
          showHeader={true} headerTemplate={customHeader1} select={handleSelect1} style={{ marginRight: "25px" }}
        >
        </ListViewComponent>

        <ListViewComponent id="ModuleList" dataSource={data} fields={{ id: 'id', text: 'name' }} width={300} height={500}
          showHeader={true} headerTemplate={customHeader2} select={handleSelect1}
        >
        </ListViewComponent> */}
      </div>
      <div style={{ margin: '10%', marginTop: '5%' }}>
        <GridComponent dataSource={studentData} allowPaging={true} pageSettings={{ pageSize: 10 }} allowFiltering={true} allowGrouping={true} allowSorting={true}>
          <ColumnsDirective>
            <ColumnDirective field='Book content' headerText='Book content' textAlign='Left' width={100} />
            <ColumnDirective field='timespent' headerText='Time_Spent' textAlign='Left' width={100} />
            <ColumnDirective field='incorrect' headerText='Incorrect' textAlign='Left' width={100} />
            <ColumnDirective field='hints' headerText='Hints Taken' textAlign='Left' width={100} />
          </ColumnsDirective>
          <Inject services={[Page, Filter, Group, Sort]} />
        </GridComponent>
      </div>

    </div>
  );
};
export default Instructors;