import styles from '../../styles/Resume.module.css';

export default function ResumePage() {
  return (
    <div className={`${styles.container} fadeIn`}>
      <h1>Resume</h1>
      <section>
        <h2>Professional Summary</h2>
        <p>Dedicated Work Study Student accustomed to performing effectively in both collaborative and autonomous capacities. Strong knowledge of various Programming languages and MS Office. Friendly and outgoing emerging professional.</p>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          <li>Basic knowledge about Python, HTML5, CSS, JavaScript, Java and SQL</li>
          <li>Typescript and Javascript</li>
          <li>React</li>
          <li>Unit testing and end to end testing</li>
          <li>Microsoft Office</li>
          <li>Meeting Transcription</li>
          <li>PowerPoint presentations</li>
          <li>Time management</li>
          <li>Document Editing</li>
        </ul>
      </section>
      <section>
        <h2>Work Experience</h2>
        <h3>Work Study Student | Barburrito restaurant- Crowfoot, Calgary, AB</h3>
        <p>July 2023 – December 2023</p>
        <p>Utilised office management software to record and track customer information.</p>
        <h3>Work Study Student | Freshco – Evanston, Calgary, AB</h3>
        <p>January 2024 – Current</p>
        <p>Kept office supplies well-organized and sufficiently stocked, and placed orders promptly to replenish materials before they depleted.</p>
      </section>
      <section>
        <h2>Education</h2>
        <p>Southern Alberta Institute of Technology, Calgary, AB - Graduated in Sept, 2024</p>
        <p>Diploma in Software Development with an overall 3.6 GPA</p>
      </section>
      <section>
        <h2>Languages</h2>
        <ul>
          <li>English - Full Professional</li>
          <li>Hindi - Native or Bilingual</li>
          <li>Punjabi - Native or Bilingual</li>
        </ul>
      </section>
    </div>
  );
}
