import React from 'react';
import SideBar from '../components/SideBar';
import styled from 'styled-components';
import { Share } from '../../../ui/icons';
import CourseInfo from '../components/CourseInfo';
import Teachers from '../components/Teachers';

const WtSide = styled.div`
   display: flex;
    gap: clamp(10px, 2vw, 20px);
    flex-wrap: wrap;
`

const Card = styled.div`
    display: flex;
    flex-direction:column;
    gap:16px;
    width: 24%;
`

const First = () => {
    return (
        <section className='px-8 py-16'>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl uppercase font-medium'>About course</h2>
                <Share />
            </div>
            <WtSide className='pt-5'>
                <div className='flex justify-between'>
                    <img style={{ width: '68%' }} src="./images/AboutCourse/courseimg.png" alt="Course Overview" />
                    <SideBar />
                </div>
                <div className='flex flex-col gap-2 w-3/4' style={{ width: '68%' }} >
                    <div className='flex flex-col mt-8'>
                        <h3 className='text-xl font-semibold'>The description of course</h3>
                        <p className='mt-5 font-normal text-[#5C5C5C]'>
                            The courses are clearly structured.  The lectures are electronically recorded by instructors (arbitration practitioners) and delivered online, with educational materials distributed to the participants at several days beforehand for thorough review before the lectures.  The lectures are followed by live workshops to consolidate the studied material, and the participants may also query the instructors regarding the subject.

                            The course is delivered within a trimester - Michaelmas (from October to December), Hilary (from January to March) and Trinity (from April to June). <br /> <br />

                            At the end of the course all participants will receive a Certificate of Attendance.  In addition, each participant will be invited to sit an assessment test to include, inter alia, writing an essay of no longer than 500 words.  Successful participants will be awarded a Certificate of Proficiency in International Arbitration.

                            Below you will find a tentative course syllabus.  It should be kept in mind however that the course contents, as well as the list of instructors, may be subject to modifications.</p>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='text-xl font-semibold mt-5'>Preliminary Reading</h3>
                        <p className='text-[#5C5C5C] pb-2 pt-4'>Participants are strongly encouraged to read the following books (latest editions) prior to the commencement of the course: </p>
                        <div className='flex'>
                            <Card>
                                <img src="./images/AboutCourse/Card.png" alt="" />
                                <div className=''>
                                    <h4 className='font-semibold'>International Arbitration: Law and Practice:</h4>
                                    <p className='text-[#1E1E1E] opacity-80 pt-1 text-sm'>Gary Born, (Wolters Kluwer);</p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <CourseInfo />

                    <Teachers />



                </div>

            </WtSide>
        </section>
    );
};

export default First;