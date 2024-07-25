// 'use client';

// import { useState } from 'react';
// import { functions } from '../firebaseconfig';
// import { httpsCallable } from 'firebase/functions';
// import styles from '../../styles/Contact.module.css';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Sending...');
//     const sendEmail = httpsCallable(functions, 'sendEmail');

//     try {
//       const result = await sendEmail(formData);
//       if (result.data.success) {
//         setStatus('Message sent successfully!');
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setStatus(`Failed to send message: ${result.data.error}`);
//       }
//     } catch (error) {
//       console.error('Error sending message:', error);
//       setStatus('Failed to send message.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1>Contact Us</h1>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Message:
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//         />
//         </label>
//         <button type="submit">Send</button>
//       </form>
//       {status && <p className={styles.status}>{status}</p>}
//     </div>
//   );
// };

// export default ContactPage;
