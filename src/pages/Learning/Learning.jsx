import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { FaPlayCircle, FaCheckCircle, FaArrowLeft, FaFilePdf } from 'react-icons/fa';
import './Learning.css';
const Learning = () => {
  const { id } = useParams();
  
  // 10 Modules ka Data
  // 10 Courses ka complete data
const courseData = {
    1: { name: "B.Tech Computer Science", modules: [
      { title: "Intro to Cloud", url: "https://youtu.be/8C_kHJ5YEiA" },
      { title: "Data Structures", url: "https://www.youtube.com/watch?v=bum_19loj9A" },
      { title: "Algorithms", url: "https://www.youtube.com/watch?v=0IAPZzGSbME" },
      { title: "DB Indexing", url: "https://youtu.be/BHCSL_ZifI0" },
      { title: "Operating Systems", url: "https://www.youtube.com/watch?v=mXw9ruZaxzQ" },
      { title: "Networking", url: "https://youtu.be/SHkbPm1Wrno" },
      { title: "Software Eng", url: "https://www.youtube.com/watch?v=kcvEiMFOcoE&t=285s&pp=ygUPc29mdHdhcmUgZW5naW5l" },
      { title: "AI & ML", url: "https://www.youtube.com/watch?v=JcI5Vnw0b2c" },
      { title: "Database Management System (DBMS)", url: "https://www.youtube.com/watch?v=KWkm1Gip4j4&pp=ygUEZGJtcw%3D%3D" },
      { title: "Final Project", url: "https://www.youtube.com/watch?v=J11Qme3vAio&t=85s&pp=ygUNYnRlY2ggcHJvamVjdA%3D%3D" }
    ]},
2: {
  name: "MBA",
  modules: [
    {
      title: "Financial Management",
      url: "https://www.youtube.com/watch?v=WNm_ez1h7Tc&pp=ygURRmluYW5jaWFsIE1hbmFnZW0%3D"
    },
    {
      title: "Marketing Management",
      url: "https://www.youtube.com/watch?v=OUxmwxA66Ss&pp=ygUUTWFya2V0aW5nIE1hbmFnZW1lbnQ%3D"
    },
    {
      title: "Organizational Behavior",
      url: "https://www.youtube.com/watch?v=c2R1TN8uqTE&pp=ygUXT3JnYW5pemF0aW9uYWwgQmVoYXZpb3I%3DM"
    },
    {
      title: "Supply Chain Management",
      url: "https://www.youtube.com/watch?v=Mi1QBxVjZAw&pp=ygUXU3VwcGx5IENoYWluIE1hbmFnZW1lbnQ%3D"
    },
    {
      title: "Business Analytics",
      url: "https://www.youtube.com/watch?v=9fFQA-JOXA0&pp=ygUSQnVzaW5lc3MgQW5hbHl0aWNz0gcJCUwLAYcqIYzv"
    },
    {
      title: "Human Resource Management",
      url: "https://www.youtube.com/watch?v=bI9RZjF-538&pp=ygUZSHVtYW4gUmVzb3VyY2UgTWFuYWdlbWVudNIHCQlMCwGHKiGM7w%3D%3D"
    },
    {
      title: "Managerial Economics",
      url: "https://www.youtube.com/watch?v=huNItcg4-bA&pp=ygUUTWFuYWdlcmlhbCBFY29ub21pY3M%3D"
    },
    {
      title: "Strategic Management",
      url: "https://www.youtube.com/watch?v=CMMUwNeBxyA&pp=ygUUU3RyYXRlZ2ljIE1hbmFnZW1lbnQ%3D"
    },
    {
      title: "Entrepreneurship",
      url: "https://www.youtube.com/watch?v=pC5l5j2u9SQ&pp=ygUQRW50cmVwcmVuZXVyc2hpcA%3D%3D"
    },
    {
      title: "Business Case Study Project",
      url: "https://www.youtube.com/watch?v=Q9r0rC00Kyw&pp=ygUbQnVzaW5lc3MgQ2FzZSBTdHVkeSBQcm9qZWN0"
    }
  ]
},
   3: {
  name: "BCA",
  modules: [
    {
      title: "Web Architecture",
      url: "https://www.youtube.com/watch?v=916GWv2Qs08"
    },
    {
      title: "Java OOP",
      url: "https://www.youtube.com/watch?v=UmnCZ7-9yDY"
    },
    {
      title: "DBMS Basics",
      url: "https://www.youtube.com/watch?v=HXV3zeQKqGY"
    },
    {
      title: "UI/UX Design",
      url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU"
    },
    {
      title: "Python Basics",
      url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc"
    },
    {
      title: "Node.js Introduction",
      url: "https://www.youtube.com/watch?v=TlB_eWDSMt4"
    },
    {
      title: "React Frontend",
      url: "https://www.youtube.com/watch?v=bMknfKXIFA8"
    },
    {
      title: "Express.js Backend",
      url: "https://www.youtube.com/watch?v=L72fhGm1tfE"
    },
    {
      title: "REST API Development",
      url: "https://www.youtube.com/watch?v=-MTSQjw5DrM"
    },
    {
      title: "Mini Project - MERN Stack",
      url: "https://www.youtube.com/watch?v=7CqJlxBYj-M"
    }
  ]
},
    4: { name: "MCA", modules: [
        { title: "Neural Networks", url: "https://www.youtube.com/watch?v=aircAruvnKk&pp=ygUPTmV1cmFsIE5ldHdvcmtz0gcJCUwLAYcqIYzv" },
        { title: "Deep Learning", url: "https://www.youtube.com/watch?v=d2kxUVwWWwU&pp=ygUNRGVlcCBMZWFybmluZ9IHCQlMCwGHKiGM7w%3D%3D" },
        { title: "Cloud Microservices", url: "https://www.youtube.com/watch?v=7IFJb-uLEaI&pp=ygUUIkNsb3VkIE1pY3Jvc2VydmljZXM%3D" },
        { title: "Distributed Systems", url: "https://www.youtube.com/watch?v=o0o4PUhtC0s&pp=ygUURGlzdHJpYnV0ZWQgU3lzdGVtcyI%3D" },
        { title: "Enterprise Software", url: "https://www.youtube.com/watch?v=QfcqaWyNUU8&pp=ygUTRW50ZXJwcmlzZSBTb2Z0d2FyZQ%3D%3D" },
        { title: "Data Mining", url: "https://www.youtube.com/watch?v=7rs0i-9nOjo&pp=ygULRGF0YSBNaW5pbmc%3D" },
        { title: "Big Data Analytics", url: "https://www.youtube.com/watch?v=bY6ZzQmtOzk&pp=ygUWICJCaWcgRGF0YSBBbmFseXRpY3MiLA%3D%3D" },
        { title: "Blockchain Tech", url: "https://www.youtube.com/watch?v=CxlLvVZ84qs&pp=ygUSIkJsb2NrY2hhaW4gVGVjaCIs" },
        { title: "Advanced OS", url: "https://www.youtube.com/watch?v=ejv9OTfF1qI&list=PLAwxTw4SYaPm4vV1XbFV93ZuT2saSq1hO" },
        { title: "Thesis Work", url: "https://www.youtube.com/watch?v=QNOr8km3-us&pp=ygUOICJUaGVzaXMgV29yayI%3D" }
    ]},
    5: { name: "M.Tech", modules: [
        { title: "Research Methods", url: "https://www.youtube.com/watch?v=K80p4u-e3pA" },
        { title: "NLP Systems", url: "https://www.youtube.com/watch?v=CMrHM8a3hqw" },
        { title: "Signal Processing", url: "https://www.youtube.com/watch?v=D-aV53gE9_o" },
        { title: "Quantum Computing", url: "https://www.youtube.com/watch?v=JhZ363412u0" },
        { title: "Advanced Robotics", url: "https://www.youtube.com/watch?v=Q403yL7_X1o" },
        { title: "Computer Vision", url: "https://www.youtube.com/watch?v=u6zlqFFnwlA" },
        { title: "IoT Frameworks", url: "https://www.youtube.com/watch?v=QSIPNhOiMoE" },
        { title: "High Performance", url: "https://www.youtube.com/watch?v=9jR7uM7Z-7k" },
        { title: "Cryptography", url: "https://www.youtube.com/watch?v=jhXCTbvnx28" },
        { title: "Research Paper", url: "https://www.youtube.com/watch?v=333-eW1-22o" }
    ]},
   6: {
  name: "LLB",
  modules: [
    {
      title: "Constitutional Law",
      url: "https://www.youtube.com/watch?v=UTaik7YkfUo&pp=ygUSY29uc3RpdHV0aW5hbCBsYWF3"
    },
    {
      title: "Corporate Law",
      url: "https://www.youtube.com/watch?v=gJ1r2W5nOSU&pp=ygUNY29ycG9yYXRlIGxhdw%3D%3D"
    },
    {
      title: "Criminal Procedure Code (CrPC)",
      url: "https://www.youtube.com/watch?v=NrfMSz0pEOk&pp=ygUeQ3JpbWluYWwgUHJvY2VkdXJlIENvZGUgKENyUEMp"
    },
    {
      title: "Intellectual Property Rights (IPR)",
      url: "https://www.youtube.com/watch?v=zkWJAvg6_ME&pp=ygUiSW50ZWxsZWN0dWFsIFByb3BlcnR5IFJpZ2h0cyAoSVBSKQ%3D%3D"
    },
    {
      title: "Family Law",
      url: "https://www.youtube.com/watch?v=KIL8WDgvyFA&pp=ygUKRmFtaWx5IExhdw%3D%3D"
    },
    {
      title: "Law of Torts",
      url: "https://www.youtube.com/watch?v=5Wpx38EuKW0&pp=ygULTGF3IG9mIFRvcnQ%3Dg"
    },
    {
      title: "Evidence Act",
      url: "https://www.youtube.com/watch?v=RxUFI4VZXLw&pp=ygUMRXZpZGVuY2UgQWN0"
    },
    {
      title: "Administrative Law",
      url: "https://www.youtube.com/watch?v=7TtY3Zn5-L4&pp=ygUbQWRtaW5pc3RyYXRpdmUgTGF3IG9uZSBzaG90"
    },
    {
      title: "Cyber Law",
      url: "https://www.youtube.com/watch?v=KtuCsBlJXk8&pp=ygUJQ3liZXIgTGF3"
    },
    {
      title: "Moot Court Practice",
      url: "https://www.youtube.com/watch?v=ls0iQJWpSEQ&pp=ygUUTW9vdCBDb3VydCBQcmFjdGkgY2U%3D"
    }
  ]
},
    7: { name: "BA", modules: [
      { title: "Macro Economics", url: "https://www.youtube.com/watch?v=xmdBlkrkTN4&pp=ygUPTWFjcm8gRWNvbm9taWNz" },
      { title: "Sociological Thought", url: "https://www.youtube.com/watch?v=YnCJU6PaCio" },
      { title: "English Literature", url: "https://www.youtube.com/watch?v=8oLnPJQ9Shw&pp=ygUSRW5nbGlzaCBMaXRlcmF0dXJl" },
      { title: "Political History", url: "https://www.youtube.com/watch?v=4CsJPrHcaBs&pp=ygURUG9saXRpY2FsIEhpc3Rvcnk%3D" },
      { title: "Philosophy Basics", url: "https://www.youtube.com/watch?v=1A_CAkYt3GY" },
      { title: "Public Admin", url: "https://www.youtube.com/watch?v=kOy25Q8Y_Gg&pp=ygUMUHVibGljIEFkbWlu" },
      { title: "Intl Relations", url: "https://www.youtube.com/watch?v=22IQzShFZlE&pp=ygUOSW50bCBSZWxhdGlvbnM%3D" },
      { title: "Human Rights", url: "https://www.youtube.com/watch?v=6e8m8L9BFa4&pp=ygUMSHVtYW4gUmlnaHRz" },
      { title: "Psychology Intro", url: "https://www.youtube.com/watch?v=vo4pMVb0R6M" },
      { title: "Cultural Studies", url: "https://www.youtube.com/watch?v=SRc9EOacYZw&pp=ygUQQ3VsdHVyYWwgU3R1ZGllcw%3D%3D" }
    ]},
    8: { name: "B.Com", modules: [
      { title: "Corporate Accounting", url: "https://www.youtube.com/watch?v=jlZW5_ZesOQ&pp=ygUUQ29ycG9yYXRlIEFjY291bnRpbmc%3D" },
      { title: "Auditing Basics", url: "https://www.youtube.com/watch?v=y3Tu-v_uHdk&pp=ygUPQXVkaXRpbmcgQmFzaWNz0gcJCU4LAYcqIYzv" },
      { title: "GST Laws", url: "https://www.youtube.com/watch?v=E8jlj2lcCgc&pp=ygUTR1NUIExhd3MgaW4gZW5nbGlzaA%3D%3D" },
      { title: "Direct Taxation", url: "https://www.youtube.com/watch?v=XV8eh9ISXSM&pp=ygUPRGlyZWN0IFRheGF0aW9u" },
      { title: "Mercantile Law", url: "https://www.youtube.com/watch?v=7yPadF_J4R0&pp=ygUOTWVyY2FudGlsZSBMYXc%3D" },
      { title: "Cost Accounting", url: "https://www.youtube.com/watch?v=3g4OyeB7kwM&pp=ygUPQ29zdCBBY2NvdW50aW5n" },
      { title: "Financial Markets", url: "https://www.youtube.com/watch?v=9em8H1p6Syw&pp=ygURRmluYW5jaWFsIE1hcmtldHM%3D" },
      { title: "Business Math", url: "https://www.youtube.com/watch?v=vtrbOri8lag&pp=ygUNQnVzaW5lc3MgTWF0aA%3D%3D" },
      { title: "Banking Law", url: "https://www.youtube.com/watch?v=ImYAOv-DREU&pp=ygULQmFua2luZyBMYXc%3D" },
      { title: "Corporate Finance", url: "https://www.youtube.com/watch?v=VYvOlggk0e4&pp=ygURQ29ycG9yYXRlIEZpbmFuY2U%3D" }
    ]},
    9: { name: "Diploma in IT", modules: [
      { title: "PC Hardware", url: "https://www.youtube.com/watch?v=d86ws7mQYIg&pp=ygUMcGMgaGFyZGF3YXJl" },
      { title: "LAN Networking", url: "https://www.youtube.com/watch?v=n0iaPtsnmxQ&pp=ygUObGFuIG5ldHdvcmtpbmc%3D" },
      { title: "C++ Scripting", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
      { title: "HTML/CSS Basics", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg" },
      { title: "Linux Admin", url: "https://www.youtube.com/watch?v=A3G-3hp88mo&pp=ygUGbGludXgg" },
      { title: "IT Security", url: "https://www.youtube.com/watch?v=OwuX-dRylhU&pp=ygULaXQgc2VjdXJ0aXk%3D" },
      { title: "Database Intro", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
      { title: "System Analysis", url: "https://www.youtube.com/watch?v=rK0xSNQeHnU&pp=ygUPU3lzdGVtIEFuYWx5c2lz" },
            { title: "AI & ML", url: "https://www.youtube.com/watch?v=JcI5Vnw0b2c" },
      { title: "Final Project", url: "https://www.youtube.com/watch?v=J11Qme3vAio&pp=ygULaXQgcHJvamVjdHM%3D" }
    ]},
    10: { name: "Cyber Security", modules: [
      { title: "Ethical Hacking", url: "https://www.youtube.com/watch?v=p475WJvAK6o" },
      { title: "Intrusion Prevention", url: "https://www.youtube.com/watch?v=7QuYupuic3Q&pp=ygUUSW50cnVzaW9uIFByZXZlbnRpb24%3D" },
      { title: "Digital Forensics", url: "https://www.youtube.com/watch?v=vD7uJ8aP0zA&pp=ygURRGlnaXRhbCBGb3JlbnNpY3M%3D" },
      { title: "Malware Analysis", url: "https://www.youtube.com/watch?v=-cIxKeJp4xo&pp=ygUQTWFsd2FyZSBBbmFseXNpcw%3D%3D" },
      { title: "Network Security", url: "https://www.youtube.com/watch?v=o_vyfo3Hw0Y&pp=ygUQTmV0d29yayBTZWN1cml0eQ%3D%3D" },
      { title: "Cloud Security", url: "https://www.youtube.com/watch?v=Qt9lhzFhW_c&pp=ygUOQ2xvdWQgU2VjdXJpdHk%3D" },
      { title: "Penetration Testing", url: "https://www.youtube.com/watch?v=CMer2DhA0s0&pp=ygUUIlBlbmV0cmF0aW9uIFRlc3Rpbmc%3D" },
      { title: "Security Policy", url: "https://www.youtube.com/watch?v=mqwPa-fghp8&pp=ygUQIlNlY3VyaXR5IFBvbGljedIHCQlOCwGHKiGM7w%3D%3D" },
      { title: "Incident Response", url: "https://www.youtube.com/watch?v=X4lPEpATNxg&pp=ygUSSW5jaWRlbnQgUmVzcG9uc2Ui" },
      { title: "Compliance Audit", url: "https://www.youtube.com/watch?v=E6mD4e1hG-c&pp=ygUSIkNvbXBsaWFuY2UgQXVkaXQi" }
    ]}
  }
  const activeCourse = courseData[id] || { name: "Course", modules: Array(10).fill({title: "Content", url: ""}) };
  const [activeIdx, setActiveIdx] = useState(0);
  // --- YE WALA useEffect MODULE SAVE/LOAD KAREGA ---
  useEffect(() => {
    // Page load hote hi local storage check karo
    const savedModule = localStorage.getItem(`lastModule_${id}`);
    
    // Agar saved data milta hai, toh activeIdx update karo
    if (savedModule !== null) {
      setActiveIdx(parseInt(savedModule));
    } else {
      // Agar kuch saved nahi hai, toh pehli video (0) par rakho
      setActiveIdx(0);
    }
  }, [id]); // Jab bhi ID badle, ye fir se chalega

  useEffect(() => {
    // Sirf tab save karo jab activeIdx valid ho
    if (activeIdx !== null) {
      localStorage.setItem(`lastModule_${id}`, activeIdx);
    }
  }, [activeIdx, id]);
  // ---------------------------------------------
  const handleVideoEnd = () => {
    if (activeIdx < 9) setActiveIdx(prev => prev + 1);
  };
  const currentModule = activeCourse.modules[activeIdx] || { title: "Loading...", url: "" };
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <aside style={{ width: '260px', minWidth: '260px', position: 'sticky', top: 0, height: '100vh' }}>
        <Sidebar />
      </aside>

      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <Link to="/my-courses" style={{ color: '#4f46e5', textDecoration: 'none', fontWeight: '600', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaArrowLeft /> Back to Courses
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '28px' }}>
           {/* Player Section */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
  
  <div className="video-container">
    <div className="player-wrapper">
      
<div className="video-box">
<ReactPlayer
  src={currentModule.url}
  width="100%"
  height="100%"
  controls
  playing
  muted
  onEnded={handleVideoEnd}
/>
</div>
    </div>
  </div>

  <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
    <h2 style={{ margin: 0 }}>{activeCourse.modules[activeIdx].title}</h2>
  </div>
</div>

            {/* Syllabus Section */}
            <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '20px', height: 'fit-content' }}>
              <h3 style={{ margin: '0 0 16px 0' }}>Course Syllabus</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeCourse.modules.map((module, idx) => (
                  <div key={idx} onClick={() => setActiveIdx(idx)}
                    style={{
                      padding: '12px', borderRadius: '10px', cursor: 'pointer',
                      background: activeIdx === idx ? '#f5f3ff' : '#fff',
                      border: activeIdx === idx ? '1px solid #4f46e5' : '1px solid #e2e8f0',
                      display: 'flex', alignItems: 'center', gap: '10px'
                    }}
                  >
                    {activeIdx === idx ? <FaPlayCircle color="#4f46e5" /> : <FaCheckCircle color="#94a3b8" />}
                    <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>{module.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Learning;