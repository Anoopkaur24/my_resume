import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Image
        src="/photos/profile.jpeg"
        alt="Anoop Kaur"
        width={200} // adjust the width as needed
        height={200} // adjust the height as needed
        className={`${styles.profilePhoto} fadeIn`}
      />
      <h1 className="fadeIn">Anoop Kaur</h1>
      <p className="fadeIn">
        Dedicated Work Study Student accustomed to performing effectively in both collaborative and autonomous capacities. Strong knowledge of various Programming languages and MS Office. Friendly and outgoing emerging professional.
      </p>
      <div className={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/anoop-kaur-48bb89278" target="_blank" className="fadeIn">LinkedIn</a>
        <a href="https://github.com/Anoopkaur24" target="_blank" className="fadeIn">GitHub</a>
      </div>
    </div>
  );
}
