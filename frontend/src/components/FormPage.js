import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../Assets/logo1.png";
import axios from 'axios';

const FormPage = () => {
  const [formData, setFormData] = useState({
    answer1: [], answer2: [], answer3: [], answer4: [], answer5: [],
    answer6: [], answer7: [], answer8: [], answer9: [], answer10: [],
    answer11: [], answer12: [], answer13: []
  });

  const handleOptionChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      // Handle checkboxes
      setFormData(prevState => ({
        ...prevState,
        [name]: prevState[name].includes(value)
          ? prevState[name].filter(option => option !== value)
          : [...prevState[name], value]
      }));
    } else if (type === "radio" || type === "text" || e.target.tagName === 'TEXTAREA') {
      // Handle radio buttons, text inputs, and textareas (all as arrays)
      setFormData({
        ...formData,
        [name]: [value],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios.post('api/survey/questions', formData)
      .then((res) => {
        console.log('Form submitted:', res.data);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };

  return (
    <div >
        <div className="fixed flex items-center space-x-4 top-0 z-10">
          <Link to='/'><img src={logo} alt="Logo" className="w-20 rounded-full m-2" /></Link>
        </div>
    <div className='flex justify-center bg-[#073b4c] z-1 mt-[-8px] '>
      
      {/* here in this div i want a image in backgound with color blend with green */}


      <div className="bg-green-200 w-[600px] m-4">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-bold mb-6">Survey Form</h2>

          {/* Question 1 */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-4 font-semibold">1. What age group do you belong to?</label>
            <div className="flex flex-col">
              {['15-25', '26-35', '36-45', '46+'].map((option) => (
                <label key={option} className="mb-2">
                  <input
                    type="radio"
                    name="answer1"
                    value={option}
                    checked={formData.answer1.includes(option)}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className="mb-6">
            <label className="font-semibold block text-gray-700 mb-4">2. How often do you experience stress, anxiety, or other mental health challenges?</label>
            <div className="flex flex-col">
              {['Daily', 'Weekly', 'Monthly', 'Rarely'].map((option) => (
                <label key={option} className="mb-2">
                  <input
                    type="radio"
                    name="answer2"
                    value={option}
                    checked={formData.answer2.includes(option)}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-4 font-semibold">3. Have you ever sought mental health support?</label>
            <div className="flex flex-col">
              {['Yes, through therapy or counseling', 'Yes, through self-help resources (apps, books, etc.)', 'No, but I’ve considered it', 'No, I haven’t'].map((option) => (
                <label key={option} className="mb-2">
                  <input
                    type="radio"
                    name="answer3"
                    value={option}
                    checked={formData.answer3.includes(option)}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 4 */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-4 font-semibold">4. What are the biggest barriers that prevent you from seeking mental health support? (Select all that apply)</label>
            <div className="flex flex-col">
              {['Cost', 'Stigma', 'Lack of time', 'Lack of trust in professionals', 'Don’t know where to start', 'Other (please specify)'].map((option) => (
                <label key={option} className="mb-2">
                  <input
                    type="checkbox"
                    name="answer4"
                    value={option}
                    checked={formData.answer4.includes(option)}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 5 */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-4 font-semibold">5. Would you be interested in using an AI-based mental health support tool that provides real-time support and therapy recommendations?</label>
            <div className="flex flex-col">
              {['Yes, definitely', 'Maybe', 'No'].map((option) => (
                <label key={option} className="mb-2">
                  <input
                    type="radio"
                    name="answer5"
                    value={option}
                    checked={formData.answer5.includes(option)}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 6 */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-4 font-semibold">6. What would you most like to see in a mental health platform like Mannmuktt? (Select up to 3)</label>
            <div className="flex flex-col">
              {['AI-driven mental health advice', 'Access to certified therapists', 'Daily journaling and mood tracking', 'Guided meditation or breathing exercises', 'Personalized therapy suggestions based on emotional analysis', 'Anonymity and privacy protection'].map((option) => (
                <label key={option} className="mb-2">
                  <input
                    type="checkbox"
                    name="answer6"
                    value={option}
                    checked={formData.answer6.includes(option)}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 7 */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-4 font-semibold">7. How much would you be willing to pay for personalized mental health services per month?</label>
            <div className="flex flex-col">
              {['₹0-500', '₹500-1000', '₹1000-2000', 'More than ₹2000'].map((option) => (
                <label key={option} className="mb-2">
                  <input
                    type="radio"
                    name="answer7"
                    value={option}
                    checked={formData.answer7.includes(option)}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 8 */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-4 font-semibold">8. How comfortable are you with sharing your mental health data (e.g., mood tracking, emotional analysis) with an AI-powered platform like Mannmuktt?</label>
            <div className="flex flex-col">
              {['Very comfortable', 'Somewhat comfortable', 'Not comfortable', 'I’m not sure yet'].map((option) => (
                <label key={option} className="mb-2">
                  <input
                    type="radio"
                    name="answer8"
                    value={option}
                    checked={formData.answer8.includes(option)}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 9 */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-4 font-semibold">9. Would you prefer speaking with a human therapist, using an AI chatbot, or a combination of both for mental health support?</label>
            <div className="flex flex-col">
              {['AI chatbot & AI Virtual Therapist', 'Human therapist', 'Combination of both', 'Neither'].map((option) => (
                <label key={option} className="mb-2">
                  <input
                    type="checkbox"
                    name="answer9"
                    value={option}
                    checked={formData.answer9.includes(option)}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 10 */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-4 font-semibold">10. Any additional thoughts or feedback about mental health platforms and how they can help you? 
</label>
            <textarea
              name="answer10"
              value={formData.answer10[0] || ''}
              onChange={handleOptionChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          {/* Question 11 */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-4 font-semibold">11. Mannmuktt offers features like AI-driven therapy suggestions, facial expression recognition, and speech analysis. Which of these features would you find most useful? (Select up to 2)
</label>
            <div className="flex flex-col">
              {['AI-driven therapy suggestions (based on CBT/DBT/ACT)', 'Facial expression recognition for real-time emotional analysis', 'Speech analysis for detecting emotional tone', 'Daily journaling and mood tracking','Integration with certified therapists'].map((option) => (
                <label key={option} className="mb-2">
                  <input
                    type="radio"
                    name="answer11"
                    value={option}
                    checked={formData.answer11.includes(option)}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 12 */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-4 font-semibold">12. If Mannmuktt offers its advanced features (e.g., real-time AI support, personalized therapy recommendations, access to therapists), would you be willing to try it?</label>
            <div className="flex flex-col">
              {['Yes, I would love to try it.', 'Maybe, I would like to learn more first.', 'No, I don’t think I would use it.'].map((option) => (
                <label key={option} className="mb-2">
                  <input
                    type="radio"
                    name="answer12"
                    value={option}
                    checked={formData.answer12.includes(option)}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Question 13 */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-4 font-semibold">13. If Mannmuktt offers these advanced features, how much would you be willing to pay monthly for full access?</label>
            <div className="flex flex-col">
              {['₹500-₹1000', '₹1000-₹2000', 'More than ₹2000','I prefer a free version with limited features'].map((option) => (
                <label key={option} className="mb-2">
                  <input
                    type="radio"
                    name="answer13"
                    value={option}
                    checked={formData.answer13.includes(option)}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default FormPage;




// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import logo from "../Assets/logo.png";
// import axios from 'axios';
// import bg from '../Assets/formbg.png'

// const FormPage = () => {
//   const [formData, setFormData] = useState({
//     answer1: [], answer2: [], answer3: [], answer4: [], answer5: [],
//     answer6: [], answer7: [], answer8: [], answer9: [], answer10: [],
//     answer11: [], answer12: [], answer13: []
//   });

//   const handleOptionChange = (e) => {
//     const { name, value, type } = e.target;

//     if (type === "checkbox") {
//       // Handle checkboxes
//       setFormData(prevState => ({
//         ...prevState,
//         [name]: prevState[name].includes(value)
//           ? prevState[name].filter(option => option !== value)
//           : [...prevState[name], value]
//       }));
//     } else if (type === "radio" || type === "text" || e.target.tagName === 'TEXTAREA') {
//       // Handle radio buttons, text inputs, and textareas (all as arrays)
//       setFormData({
//         ...formData,
//         [name]: [value],
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);

//     axios.post('http://localhost:5000/api/survey/questions', formData)
//       .then((res) => {
//         console.log('Form submitted:', res.data);
//       })
//       .catch((err) => {
//         console.log('Error:', err);
//       });
//   };

//   return (
//     <div>
//         <div className="fixed flex items-center space-x-4 top-0 z-10">
//           <Link to='/'><img src={logo} alt="Logo" className="w-24" /></Link>
//         </div>
//         <div className="flex justify-center items-center min-h-screen" style={{
//     backgroundImage: 'linear-gradient(to top, #4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 86%, #432c39 100%)',
//   }}>
//   <div className="bg-purple-500 bg-opacity-60 bg-blend-multiply bg-cover bg-center w-full flex justify-center items-center">
//     <div className="bg-white w-[600px] m-4 p-8 rounded-lg shadow-lg">
//         <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full">
//           <h2 className="text-2xl font-bold mb-6">Survey Form</h2>

//           {/* Question 1 */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-4">1. What age group do you belong to?</label>
//             <div className="flex flex-col">
//               {['15-25', '26-35', '36-45', '46+'].map((option) => (
//                 <label key={option} className="mb-2">
//                   <input
//                     type="radio"
//                     name="answer1"
//                     value={option}
//                     checked={formData.answer1.includes(option)}
//                     onChange={handleOptionChange}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Question 2 */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-4">2. How often do you experience stress, anxiety, or other mental health challenges?</label>
//             <div className="flex flex-col">
//               {['Daily', 'Weekly', 'Monthly', 'Rarely'].map((option) => (
//                 <label key={option} className="mb-2">
//                   <input
//                     type="radio"
//                     name="answer2"
//                     value={option}
//                     checked={formData.answer2.includes(option)}
//                     onChange={handleOptionChange}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Question 3 */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-4">3. Have you ever sought mental health support?</label>
//             <div className="flex flex-col">
//               {['Yes, through therapy or counseling', 'Yes, through self-help resources (apps, books, etc.)', 'No, but I’ve considered it', 'No, I haven’t'].map((option) => (
//                 <label key={option} className="mb-2">
//                   <input
//                     type="radio"
//                     name="answer3"
//                     value={option}
//                     checked={formData.answer3.includes(option)}
//                     onChange={handleOptionChange}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Question 4 */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-4">4. What are the biggest barriers that prevent you from seeking mental health support?</label>
//             <div className="flex flex-col">
//               {['Cost', 'Stigma', 'Lack of time', 'Lack of trust in professionals', 'Don’t know where to start', 'Other (please specify)'].map((option) => (
//                 <label key={option} className="mb-2">
//                   <input
//                     type="checkbox"
//                     name="answer4"
//                     value={option}
//                     checked={formData.answer4.includes(option)}
//                     onChange={handleOptionChange}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Question 5 */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-4">5. Would you be interested in using an AI-based mental health support tool that provides real-time support and therapy recommendations?</label>
//             <div className="flex flex-col">
//               {['Yes, definitely', 'Maybe', 'No'].map((option) => (
//                 <label key={option} className="mb-2">
//                   <input
//                     type="radio"
//                     name="answer5"
//                     value={option}
//                     checked={formData.answer5.includes(option)}
//                     onChange={handleOptionChange}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Question 6 */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-4">6. What would you most like to see in a mental health platform like Mannmuktt?</label>
//             <div className="flex flex-col">
//               {['AI-driven mental health advice', 'Access to certified therapists', 'Daily journaling and mood tracking', 'Guided meditation or breathing exercises', 'Personalized therapy suggestions based on emotional analysis', 'Anonymity and privacy protection'].map((option) => (
//                 <label key={option} className="mb-2">
//                   <input
//                     type="checkbox"
//                     name="answer6"
//                     value={option}
//                     checked={formData.answer6.includes(option)}
//                     onChange={handleOptionChange}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Question 7 */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-4">7. How much would you be willing to pay for personalized mental health services per month?</label>
//             <div className="flex flex-col">
//               {['₹0-500', '₹500-1000', '₹1000-2000', 'More than ₹2000'].map((option) => (
//                 <label key={option} className="mb-2">
//                   <input
//                     type="radio"
//                     name="answer7"
//                     value={option}
//                     checked={formData.answer7.includes(option)}
//                     onChange={handleOptionChange}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Question 8 */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-4">8. How comfortable are you with sharing your mental health data with an AI-powered platform like Mannmuktt?</label>
//             <div className="flex flex-col">
//               {['Very comfortable', 'Somewhat comfortable', 'Not comfortable', 'I’m not sure yet'].map((option) => (
//                 <label key={option} className="mb-2">
//                   <input
//                     type="radio"
//                     name="answer8"
//                     value={option}
//                     checked={formData.answer8.includes(option)}
//                     onChange={handleOptionChange}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Question 9 */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-4">9. What factors are most important when considering a mental health platform?</label>
//             <div className="flex flex-col">
//               {['Cost', 'Effectiveness', 'Ease of use', 'Trust and security', 'Accessibility', 'Range of services'].map((option) => (
//                 <label key={option} className="mb-2">
//                   <input
//                     type="checkbox"
//                     name="answer9"
//                     value={option}
//                     checked={formData.answer9.includes(option)}
//                     onChange={handleOptionChange}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Question 10 */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-4">10. Any additional thoughts or feedback about mental health platforms and how they can help you?</label>
//             <textarea
//               name="answer10"
//               value={formData.answer10[0] || ''}
//               onChange={handleOptionChange}
//               className="w-full p-2 border rounded-lg"
//             />
//           </div>

//           {/* Question 11 */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-4">11. How did you hear about Mannmuktt?</label>
//             <div className="flex flex-col">
//               {['Social media', 'Friend or family', 'Internet search', 'Other (please specify)'].map((option) => (
//                 <label key={option} className="mb-2">
//                   <input
//                     type="radio"
//                     name="answer11"
//                     value={option}
//                     checked={formData.answer11.includes(option)}
//                     onChange={handleOptionChange}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Question 12 */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-4">12. Do you think an app like Mannmuktt can make a significant impact on mental health in India?</label>
//             <div className="flex flex-col">
//               {['Yes, definitely', 'Possibly', 'Not sure', 'No'].map((option) => (
//                 <label key={option} className="mb-2">
//                   <input
//                     type="radio"
//                     name="answer12"
//                     value={option}
//                     checked={formData.answer12.includes(option)}
//                     onChange={handleOptionChange}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Question 13 */}
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-4">13. Would you recommend Mannmuktt to others if it fulfills your mental health needs?</label>
//             <div className="flex flex-col">
//               {['Yes', 'Maybe', 'No'].map((option) => (
//                 <label key={option} className="mb-2">
//                   <input
//                     type="radio"
//                     name="answer13"
//                     value={option}
//                     checked={formData.answer13.includes(option)}
//                     onChange={handleOptionChange}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>

//           <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">Submit</button>
//         </form>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default FormPage;
